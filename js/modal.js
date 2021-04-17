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
    modalUser.textContent = elements.username == '' ? 'Unknown User': elements.username;
    modalTitle.textContent = elements.title;
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
    changeText();
}

function moveRigth() {
    if (gifIndex < galleryGif.length - 1) {
        gifIndex = gifIndex + 1;
    }else {
        gifIndex = 0;
    }
    changeText();
}

function changeText() {
    gifExpanded.src = galleryGif[gifIndex].images.original.url;
    modalUser.textContent = galleryGif[gifIndex].username == '' ? 'Unknown User': galleryGif[gifIndex].username;
    modalTitle.textContent = galleryGif[gifIndex].title;
}

function modalBtns(gif) {
    // create elements
    let favoriteBtn = document.createElement('div');
    let downloadBtn = document.createElement('div');
    // add styles
    favoriteBtn.classList.add('fav_modal');
    downloadBtn.classList.add('download_modal');
    // organice elements
    modalButtons.append(favoriteBtn, downloadBtn);
    favoriteBtn.addEventListener('click', () => {
        addFavorite(galleryGif[gifIndex])
        favoriteBtn.style.backgroundImage = favoritesChecked(galleryGif[gifIndex]) ? "url(/assests/icon-trash-hover.svg)": '';
    });
    //************************ */ PENDIENTE DOWNLOAD GIF **************//
    // downloadBtn.addEventListener('click', () => downloadGif(url));
}
modalBtns()