// ------------ GET SUGGESTIONS  -------------- //

async function getSuggestions() {
    let searchInput = document.getElementById('search_input').value;
    let resp = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${searchInput}&limit5&offset=0`);
    let data = await resp.json();
    return data;
}

//------------ Draw Suggestions -----------//

function drawSuggestions() {
    suggestionList.innerHTML = '';
    suggestionList.style.display = 'block';
    searchButton.style.display = "none";
    closeButton.style.display = "block";
    getSuggestions().then(data => {
        let suggestions = data.data;
        suggestions.forEach(element => {
            // create elements 
            let li = document.createElement('li');
            let spam = document.createElement('spam');
            // add styles 
            li.classList.add('li_suggestions')
            spam.classList.add('spam_lupa')
            li.innerText = element.name;
            // organize elements 
            li.appendChild(spam);
            suggestionList.appendChild(li);
            // Cick event for elements 
             li.addEventListener('click', () => {
                 console.log(element.name);
                 searchInput.value = '';
                 suggestionList.innerHTML = '';
                 closeButton.style.display = 'none';
                 searchButton.style.display = 'block';
                 localStorage.setItem("inputValue", JSON.stringify(element.name));
                 showresults()
                 searchText.innerHTML = (element.name);
                 searchText.classList.add('search_text');
             });
        });
})
    //close button event
closeButton.addEventListener('click', () => {
    searchInput.innerHTML = '';
    suggestionList.style.display = 'none';
    hr.style.display = 'none';
    closeButton.style.display = 'none';
    searchButton.style.display = 'block';
    searchInput.value = '';
})

}

//------------SHOW SUGGESTION LIST ---------------------------------//

searchInput.addEventListener('keyup', () => {
    drawSuggestions();
  });




//------------------- SHOW RESULTS ---------------//

function showresults() {
        document.getElementById('search_result').innerHTML = '';
        let getValue = JSON.parse(localStorage.getItem('inputValue'));
        getGif(getValue).then(
            resp => drawGif(resp)
        )
    // See more btn 
    btnSeeMore.style.display = 'block';
}