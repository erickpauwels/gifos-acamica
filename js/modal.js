//---- Global variable to show wich one im showing -------//

let gifIndex;
let galleryGif;

//  buttons events 
   moveLeftBtn.addEventListener ('click', () => {
    moveLeft();
})
moveRigthBtn.addEventListener ('click', () => { 
    moveRigth();
})

//---------------- EXPAND GIF ---------------------//
function expand(gif, index) {
    console.log(gif, index);
    let elements = gif[index];
    gifExpanded.src = elements.images.original.url;
    modal.style.display = 'flex';
    gifIndex = index;
    galleryGif = gif;
}
//--------------- FUNTCIONS BUTTONS LEFT & RIGTH--------------//

function moveLeft() {
    if (gifIndex > 0) {
        gifIndex = gifIndex -1;
    }else {
        gifIndex = galleryGif.length -1;
    }
    gifExpanded.src = galleryGif[gifIndex].images.original.url;
}

function moveRigth() {
    if (gifIndex < galleryGif.length - 1) {
        gifIndex = gifIndex + 1;
    }else {
        gifIndex = 0;
    }
    gifExpanded.src = galleryGif[gifIndex].images.original.url;
}