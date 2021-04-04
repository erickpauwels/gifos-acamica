
//----------------- Call API --------------------//

async function getGif (text) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}&limit=12&offset=0&lang=en`);
    let gif = await response.json();
    console.log(gif);
    let results = gif.data;
    console.log(results);
    results.forEach(element => {
        drawGif(element);
    });
}

// ---------------- DRAW GIF RESULTS --------------------//

function drawGif(name) {
    // call element
    let container = document.getElementById('search_result');
    // create element
    let gifBox = document.createElement('div');
    let gif = document.createElement('img');
    let user = document.createElement('h3');
    let gifTitle = document.createElement('h2');
    // organize element
    gifBox.appendChild(gif);
    gifBox.appendChild(user);
    gifBox.appendChild(gifTitle);
    container.appendChild(gifBox);
    // add class
    gifBox.classList.add('search_result');
    gif.src = name.images.downsized.url;
    user.textContent = name.username;
    gifTitle.innerHTML = name.title
}

// ------------------- CLICK EVENT -------------------------//

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(searchInput.value);
    //delete results
    document.getElementById('search_result').innerHTML = '';
    getGif(searchInput.value);
    console.log(getGif);
    // delete input text
    searchInput.value = '';
})