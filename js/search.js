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
    suggestionList.innerHTML = '';
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

hr.style.display = 'none';

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
            // display hr
            hr.style.display = 'block';
        });
     // NO RESULTS
    (gif.length === 0) ? (noResults.style.display = 'flex')  && (btnSeeMore.style.display= 'none')  :  (closeButton.style.display = 'none') && (searchButton.style.display = 'block') && (noResults.style.display = 'none');
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
// ------------------TRENDING TEXT ON SEARCH SECTION ---------------------- //

async function getTrendingP () {
    let response = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`);
    let trendingOptions = await response.json();
    return trendingOptions.data.slice(0,5);
}


// call draw function 

getTrendingP().then(
  (trendingOptions) => drawTrendingText(trendingOptions)
);

//------------------ DRAW TRENDING TEXT---------------//

function drawTrendingText (trendingOptions) {
    trendingOptions.forEach((trending, i) =>{
        // Create SPAM for trending text
        let spam = document.createElement('treding_text');
        let text = trending;
        // add classes
        spam.classList.add('spam');
        spam.textContent = `${text},  ` 
        // Organice elements
        trendingP.appendChild(spam);

        //---------------- GET TRENDING TEXT ON RESULTS -----------//
        spam.addEventListener('click', (event) =>{
            event.preventDefault(spam);
            localStorage.setItem("inputValue", JSON.stringify(trending));
            getGif(trending).then(
                gif => drawGif(gif)
            )
            searchText.innerHTML = trending;
            searchText.classList.add('search_text')
            // display Button See More
            btnSeeMore.style.display = 'block';
            containerResults.innerHTML = ""
        })
    })
}

