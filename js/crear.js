
//-------------- CREATE VARIABLES -------------------//

const video = document.getElementById('video');
const videoContainer = document.getElementById('crear_container');
const textBox = document.getElementById('text_box');
const timer = document.getElementById('timer');
const repeat = document.getElementById('repeat');
let blob;
const stepsContainerGifos =  document.getElementById('steps_container');
//BUTTONS

const startBTn = document.getElementById('start_btn');
const recordBTn = document.getElementById('record_btn');
const endBTn = document.getElementById('end_btn');
const uploadBTn = document.getElementById('upload_btn');

// NUMBERS

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');

// Timer
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let totalSeconds = 0;

// RESULTS
const myResults = document.getElementById('mis_gifos_results');

// styles buttons starting 

video.style.display = 'none'
recordBTn.style.display ='none';
endBTn.style.display ='none';
uploadBTn.style.display ='none';
timer.style.display = "none";
repeat.style.display = "none";

//Upload End point 
let uploadUrl = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

// ------------------ START VIDEO  ---------------------//



async function startvideo() {
    let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    video.srcObject = stream;
    video.play();
    // videoContainer.appendChild(video)
    // video.classList.add('crear_container');
    return stream
}

// --------------- START RECORDING ----------------------///

startBTn.addEventListener('click', () => {

    
    startBTn.style.display ='none';
    startvideo().then(
        stream => {
            textBox.style.display = 'none';
            recordBTn.style.display ='block';
            video.style.display = 'block';
            number1.classList.add('step_selected');
            recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                    console.log('started')
                },
            });
        }
    )
    
})
  

//------------------ START RECORDING -------------------//

recordBTn.addEventListener('click', () =>{
    number1.classList.remove('step_selected');
    number2.classList.add('step_selected');
    recordBTn.style.display ='none';
    endBTn.style.display ='block';
    recorder.startRecording();
    timer.style.display = "flex";
    setInterval(setTime, 1000);
})

function setTime() {
    ++totalSeconds;
    seconds.innerHTML = pad(totalSeconds%60);
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val) {
    var valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
// ------------------ END RECORDING --------------------//

endBTn.addEventListener('click', () =>{
    number2.classList.remove('step_selected');
    number3.classList.add('step_selected');
    videoContainer.style.border = 'none';
    recorder.stopRecording( () => {
        blob = recorder.getBlob();
        let blobInfo = URL.createObjectURL(blob);
        // console.log(blobInfo);
        drawResultmyGif(blobInfo);
    });
    uploadBTn.style.display ='block';
    endBTn.style.display ='none';
    timer.style.display = "none";
    // Repeat caption 
    repeat.style.display = "block";
    repeat.addEventListener('click', () => location.reload());

    videoContainer.appendChild(myResults);
    video.style.display = "none";

   

})

//----------------------- UPLOAD ----------------------------------------//

async function uploadGif() {  
    let form = new FormData();
    form.append('file', blob, 'myGif.gif');
    console.log(form.get('file'));

    let resp = await fetch(uploadUrl, { method: "POST", body: form });
    let data = await resp.json();

    return data;
}

// Fetch endopint and bring created gifs
async function getGifos(id) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`);
    let content = await response.json();
    return content;
}

//-------------------UPLOAD CLICK EVENT -------------------// 

uploadBTn.addEventListener('click', () =>{
    uploadBTn.style.display = 'none';
    // repeat.style.display = "none";
    videoHover()
    // Upload gif, save it to local storage and show success hover
    uploadGif().then(data => {
        let gifId = data.data.id;
        
        getGifos(gifId).then(content => {
            console.log(content);
            
            // Define url for download button and uploaded gif hover
            let url = content.data.images.original.url;
            successHover(url);

            // Save created gifs to local storage
            let obj = content.data;
            let gifosList = JSON.parse(localStorage.getItem('gifosList'));
            let gifosIndex;

            if (!gifosList) {
                gifosList = [];
                gifosIndex = -1;
            } else {
                gifosIndex = gifosList.findIndex(gifosList => gifosList.id == obj.id);
            }

            if (gifosIndex == -1) {
                gifosList.push(obj);
            } else {
                gifosList.splice(gifosIndex, 1);
                location.reload();
            }

            localStorage.setItem('gifosList', JSON.stringify(gifosList));
        });

        
    });
})

// ----------successHover when uploading---------//

function successHover(url) {
    videoContainer.innerHTML = "";
    let div = document.createElement('div');
    let img = document.createElement('div');
    let text = document.createElement('p');
    let btnsContainer = document.createElement('div');
    let saveBtn = document.createElement('div');
    let linkBtn = document.createElement('div');

    text.innerText = "GIFO subido con éxito";
    
    div.classList.add('video-hover');
    img.classList.add('succes-hover');
    text.classList.add('video-hover-text');
    btnsContainer.classList.add('video-hover-btns-container');
    saveBtn.classList.add('video-hover-save-btn');
    linkBtn.classList.add('video-hover-link-btn');

    videoContainer.append(div);
    btnsContainer.append(saveBtn, linkBtn);
    div.append(btnsContainer, img, text);

    saveBtn.addEventListener('click', () => downloadGif(url));
    linkBtn.addEventListener('click', () => getLink(url));
}

// Create hover over gif while uploading
function videoHover() {
    let div = document.createElement('div');
    let img = document.createElement('div');
    let text = document.createElement('p');

    text.innerText = "Estamos subiendo tu GIFO";
    
    div.classList.add('video-hover');
    img.classList.add('loader-hover');
    text.classList.add('video-hover-text');

    videoContainer.append(div);
    div.append(img, text);
}

// --------------Geyt Link ---------------//

function getLink(url) {
    window.alert("El enlace del gifo creado es: " + url);
}

// ----------------------- DRAW mi gifo result on screen -------------------//
function drawResultmyGif (url) {
    let myGif = document.createElement('img');
    myGif.src = url;
    videoContainer.appendChild(myGif);
}



