
let gifos = JSON.parse(localStorage.getItem('gifosList'));


/* function drawResultmyGif() {
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
 */
// drawResultmyGif(); 
console.log(gifos);

function myGifos() {

    if (gifos.length === 0) {
        iconMyGifos.style.display = "block";
        myGifosText.style.display = "block";
    } else {
        myGifosText.style.display = "none";
        myResults.style.display = "flex";
        myGifosResultsBox(gifos);
    }
}

myGifos();

function myGifosResultsBox(gifos) {
    for (let i = 0; i < gifos.length; i++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
    
        img.src = gifos[i].images.original.url;
    
        div.classList.add('gif-container');
        div.appendChild(img);
        myResults.appendChild(div);
    
        /* div.addEventListener('mouseenter', () => drawHoverGif(gifos, i, div));
        div.addEventListener('mouseleave', () => removeHoverGif(div)); */
    
        /* if (gifos.length <= 12) {
            seeMoreMyGifos.style.display = 'none';
        } */
    }
}