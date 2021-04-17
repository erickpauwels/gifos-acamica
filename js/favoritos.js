
//------ FAVORITE EVENT -------//

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
    return favoritesIndex != -1; // different of -1 = true = its in favorites.
}
 
