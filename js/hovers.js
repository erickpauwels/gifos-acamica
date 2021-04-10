 
//---------------------  HOVER ON GIF --------------------------//

function drawHover(gif, index, div) {
    let elements =  gif[index];
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
    user.textContent = elements.username;
    title.textContent = elements.title;
}

//---------------------- REMOVE HOVER --------------------------//

function removeHover (div) {
    // call div from DOM with the class
    let divGif = document.querySelector(".img_hover");
    // remove child
    div.removeChild(divGif);
}