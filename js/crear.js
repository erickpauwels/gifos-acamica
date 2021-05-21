
//-------------- CREATE VARIABLES -------------------//

const video = document.getElementById('video');
const videoContainer = document.getElementById('crear_container');
const textBox = document.getElementById('text_box');
const timer = document.getElementById('timer');
const repeat = document.getElementById('repeat');

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
    uploadBTn.style.display ='block';
    recorder.stopRecording();
    endBTn.style.display ='none';
    timer.style.display = "none";
    // Repear caption 
    repeat.style.display = "block";
    repeat.addEventListener('click', () => location.reload());
})

// ----------------------- UPLOAD GIFO --------------------- //

