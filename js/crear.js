
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
    recorder.stopRecording( () => {
        blob = recorder.getBlob();
        let blobInfo = URL.createObjectURL(blob);
        // console.log(blobInfo);
        drawResultmyGif(blobInfo);
        localStorage.setItem("migifo", blobInfo)
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

// ----------------------- DRAW RESULTS FOR "MIS GIFOS" -------------------//
function drawResultmyGif (url) {
    console.log(url);
    let myGif = document.createElement('img');
    let link = document.createElement("a");
    
    myGif.src = url;
      link.textContent = "DESCARGAR";
      link.setAttribute("download", 'mygif.gif');
      link.href = url; 
      link.classList.add('download_a');
      myResults.appendChild(myGif);
      stepsContainerGifos.appendChild(link);
    //   myGif.style.display = 'none';
}



