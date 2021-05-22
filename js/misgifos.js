

function drawResultmyGif() {
    let url_blob = localStorage.getItem("migifo");
    let myGif = document.createElement('img');
    myGif.src = url_blob;
    myGif.classList.add ('my_gif');
    myResults.appendChild(myGif);
    if (url_blob.length > 0) {
        myGifosText.style.display = "none";
        myGif.style.display = "flex";
    }else {
        myGifosText.style.display = "flex";
    }
}

drawResultmyGif();

