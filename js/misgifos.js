

function drawResultmyGif() {
    let div = document.createElement('div');
    let url_blob = localStorage.getItem("migifo");
    let myGif = document.createElement('img');
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

iconGifos.addEventListener('click', () => {
    let bajar = downloadGif();
    console.log(bajar);
})

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