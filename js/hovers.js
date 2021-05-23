//---------------------  HOVER ON GIF --------------------------//

function drawHover(gif, index, div) {
    let elements =  gif[index];
    let url = elements.images.downsized.url;
    // create elements  
    let divGif = document.createElement('div');
    let iconsBox = document.createElement('div');
    let textBox = document.createElement('div');
    let favIcon = document.createElement('div');
    let downloadIcon = document.createElement('div');
    let expandIcon = document.createElement('div');
    let user = document.createElement('p');
    let title = document.createElement('p'); 
    // organize elements
    iconsBox.appendChild (favIcon);
    iconsBox.appendChild (downloadIcon);
    iconsBox.appendChild (expandIcon);
    textBox.appendChild (user);
    textBox.appendChild (title);
    divGif.appendChild (iconsBox);
    divGif.appendChild (textBox); 
    div.appendChild(divGif);
    // add class
    divGif.classList.add('img_hover');
    favIcon.classList.add('fav_icon');
    downloadIcon.classList.add('download_icon');
    expandIcon.classList.add('expand_icon');
    iconsBox.classList.add('icons_box');
    textBox.classList.add('text_box');
    user.textContent = elements.username == '' ? 'Unknown User': elements.username;
    title.textContent = elements.title;
            // Favicon event
            favIcon.addEventListener('click', () =>{
                addFavorite(elements);
                favIcon.style.backgroundImage = favoritesChecked(elements) ? "url(./assests/icon-trash-hover.svg)": '';
            })
            favIcon.style.backgroundImage = favoritesChecked(elements) ? "url(./assests/icon-trash-hover.svg)": '';
            
            //-------------------Expand Event------------------//

            expandIcon.addEventListener('click', () => {
                expand(gif, index);
            })

            //---------------- Dowanload GIF EVENT --------------//

            downloadIcon.addEventListener('click', () =>  downloadGif(url));


            //--------------------close modal ------------------//

            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            })
}

//---------------------- REMOVE HOVER --------------------------//

function removeHover (div) {
    // call div from DOM with the class
    let divGif = document.querySelector(".img_hover");
    // remove child
    div.removeChild(divGif);
} 

// ------------------------ DOWNLOAD GIF ----------------------------

function downloadGif(url) {
    fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
        const imgHref = window.URL.createObjectURL(new Blob([blob]));
        var link = document.createElement("a");
        link.setAttribute("download", 'mygif.gif');
        link.href = imgHref;
        document.body.appendChild(link);
        link.click();
        link.remove();
    });
}