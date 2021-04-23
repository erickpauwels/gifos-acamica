// ------------ GET SUGGESTIONS  -------------- //

async function getSuggestions(limit) {
    let searchInput = document.getElementById('search_input').value;
    let resp = await fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${searchInput}&limit=${limit}&offset=0`);
    let data = await resp.json();
    return data;
}

//------------ Draw Suggestions -----------//

function drawSuggestions() {
    // searchInput.innerHTML = '';
    suggestionList.innerHTML = '';
    // create elements 
    let hr = document.createElement('hr');
    hr.classList.add('hr_suggestions');   
    suggestionList.appendChild(hr); 
    
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
                 localStorage.setItem("inputValue", JSON.stringify(element.name));
                 showresults()
                 searchText.innerHTML = (element.name);
                 searchText.classList.add('search_text');
             });
        });
})}

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