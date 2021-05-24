

function drawResultmyGif() {
    let div = document.createElement('div');
    let url_blob = localStorage.getItem("migifo");
    let myGif = document.createElement('img');
    console.log(url_blob);
    myGif.src = url_blob;
    myGif.classList.add ('my_gif');
    myResults.appendChild(div);
    myResults.appendChild(iconGifos);
        div.appendChild(myGif);
    if (url_blob.length > 0) {
        myGifosText.style.display = "none";
        myGif.style.display = "flex";
    }else {
        myGifosText.style.display = "flex";
    }
    iconGifos.style.display = "block";   
}

drawResultmyGif();

// -----------download function -------------------------- //

/* iconGifos.addEventListener('click', () => {
    const url = localStorage.getItem("migifo");
    console.log(url);
    let link = document.createElement("a");
    link.textContent = "descargar";
    link.setAttribute("download", 'mygif.gif');
    link.href = url;
    myResults.appendChild(link);
})
 */
