
//----------------- Call API --------------------//

async function getGif (text , offset ) {
    let response = await fetch(`${API}/search?api_key=${apiKey}&q=${text}&limit=12&offset=${offset}`);
    let resp = await response.json();
    return resp;
}

// ------------------- CLICK EVENT ON SEARCH INPUT -------------------------//

searchButton.addEventListener('click', (event) => {
    // Click EVENT 
    event.preventDefault();
    console.log(searchInput.value);
    localStorage.setItem("inputValue", JSON.stringify(searchInput.value));
    // Call Draw Function 
    getGif(searchInput.value).then(
        resp => drawGif(resp)
    )
    // Text Conten Input
    searchText.innerHTML = (searchInput.value);
    searchText.classList.add('search_text')
    // display Button See More
    btnSeeMore.style.display = 'block';
    //delete results
    document.getElementById('search_result').innerHTML = '';
    // delete input text
    searchInput.value = '';
})

// ---------------- DRAW GIF RESULTS --------------------//


function drawGif(data){
    // call element
    let gif = data.data;
    console.log(gif);
    gif.forEach(
        (element, index) => {
            // create element 
            let div = document.createElement('div');
            let img = document.createElement('img');
            // add class
            img.src = element.images.downsized.url;
            div.classList.add('search_result');
            //hover event
            div.addEventListener("mouseenter", () => drawHover(gif, index, div));
            div.addEventListener("mouseleave", () => removeHover(div));
            // organize element
            div.appendChild(img);
            containerResults.appendChild(div)
        });
     // NO RESULTS
    (gif.length === 0) ? (noResults.style.display = 'flex')  && (btnSeeMore.style.display= 'none') : (noResults.style.display = 'none');
}



//--------------- Button Event SEE MORE ---------------- //

function seeMoreEvent () {
    btnSeeMore.addEventListener('click', () => {
        let getValue = JSON.parse(localStorage.getItem('inputValue'));
        offset += 12;
        getGif(getValue, offset).then(
            resp => drawGif(resp)
        )
})}
seeMoreEvent ()

