
//----FAVORITE EVENT BUTTON-------//

function addFavorite (gif) {
let favorites = JSON.parse(localStorage.getItem("favorites"));
let favoritesIndex;
// call a null element & create an array
if (!favorites){
     favorites  = [] 
     favoritesIndex = -1;
  }else {
      // Set variable for the Index & search for the ID
    favoritesIndex = favorites.findIndex( favorites => favorites.id == gif.id )
  }

// findIndex method, '=-1' if doesnt found the element
if (favoritesIndex == -1){
    favorites.push(gif);
    
}else {
// Splice method , delete the repeated id 
    favorites.splice (favoritesIndex, 1)
    location.reload();
}
localStorage.setItem("favorites", JSON.stringify(favorites));

}

//--------- FAVORITES CHECKED -----------------//

function favoritesChecked (elements) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
     if (!favorites){
        return false; // false = Its not in favorites
     }
    let favoritesIndex = favorites.findIndex( favorites => favorites.id == elements.id );
    // console.log(favoritesIndex);
    return favoritesIndex != -1; // different of -1 = true = its in favorites.
}

//------------ FAVORITES SECTION  -----------//


function favoritesResults() {

    if (favorites.length > 0) {
        noFavorites.style.display = "none";
        // favoritesHeader.style.display = "flex";
        showFavorites(favorites);
        favoritesLoop(favorites);
    }else{
        noFavorites.style.display = "flex";
    }
}

favoritesResults()

//------------ FAVORTIES LOOP  -----------------//

function favoritesLoop(favorites) {
    for (let i = 0 ; i < 12 ; i++) {
        drawfavoriteGif(favorites, i)
}}

//------ Draw favorites -------------//

function drawfavoriteGif(favorites, i){ 
    // create element 
    let div = document.createElement('div');
    let img = document.createElement('img');
    // add class
    img.src = favorites[i].images.downsized.url
    div.classList.add('my_favorites');
    //hover event
    div.addEventListener("mouseenter", () => drawHover(favorites, i, div));
    div.addEventListener("mouseleave", () => removeHover(div));
    // organize element
    div.appendChild(img);
    favoritesResultsContainer.appendChild(div);   
};

// --------------------SHOW FAVORITE RESULTS --------------------------//

function showFavorites(favorites) {
    // favoritesResultsContainer.style.display = "flex";
    if (favorites.length > 12) {
        btnFavoritesSeeMore.style.display = "block";
    }
    btnFavoritesSeeMore.addEventListener('click', () => {
        for (let i = currentIndex; i < currentIndex + 12; i++) {
            if (favorites[i]) {
                drawfavoriteGif(favorites, i);
            }
        }
        currentIndex += 12;
        
        // If there's no more favorites hide see more button
        if (currentIndex >= favorites.length) {
            btnFavoritesSeeMore.style.display = 'none';
            }
        }
    )
}

