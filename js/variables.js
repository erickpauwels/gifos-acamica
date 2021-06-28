
//-------------- API key-------------------- //
const API = 'https://api.giphy.com/v1/gifs';
const apiKey = '45birQZBv2wEVbnGDxnWsMaSwd69xraZ';

//----------------------- MENU SECTIONS --------------//

// let favoriteMenu = document.getElementById('favorites_section');
// let favoritos = document.getElementById('favoritos');
let searchSection = document.getElementById('search');
let resultsSection = document.getElementById('results');
let misGifosSection = document.getElementById('mis_gifos');
let misGifosMenu = document.getElementById('mis_gifos_section');
let crearSection = document.getElementById('crear');


//--------- VARIABLES SEARCH GIFS----------//

let searchInput = document.getElementById('search_input');
let searchButton = document.getElementById('search_button');
let suggestionList = document.getElementById('suggestions_input');
let searchGifos = document.getElementById('search_gifos');
let searchText = document.getElementById('search_text');
let trendingP = document.getElementById('trending_p');
let closeButton = document.getElementById('close_button');

// ----------VARIABLES RESULTS -----------//
let btnSeeMore = document.getElementById('btn_see_more');
let noResults = document.getElementById ('no_results');
let containerResults = document.getElementById('search_result');
let hr = document.getElementById('hr');
let offset = 0;

// -----------VARIABLES MODAL -----------//
let modal = document.getElementById('modal');
let modalContainer = document.getElementById('modal_container')
let closeModal = document.getElementById('close_modal');
let modalTextButtons = document.getElementById('modal_text_buttons')
let modalUser = document.getElementById('modal_user');
let modalTitle = document.getElementById('modal_title');
let modalButtons = document.getElementById('modal_buttons');


let moveLeftBtn = document.getElementById('left_div');
let moveRigthBtn = document.getElementById('rigth_div');
let gifExpanded = document.getElementById('gif_expanded');

// ------------- VARIABLES TRENDING -------//
let trendingContainer = document.getElementById('trending_gifs');
let LeftBtn = document.getElementById('left_btn');
let RigthBtn = document.getElementById('rigth_btn');
let trendingText = document.getElementById('trending_text');
let trendingTitle = document.getElementById('trending_title');

//-------------- VARIABLES FAVORITES -------//
let btnFavoritesSeeMore = document.getElementById('btn_see_more_favorites');
let favoritesResultsContainer = document.getElementById('favorites_results');
let favoritesHeader = document.getElementById('favorite_header');
let favorites = JSON.parse(localStorage.getItem('favorites'));
let currentIndex=12;
let noFavorites = document.getElementById('no_results_fav');

//------------------ MIS GIFOS ------------------- //
let myGifosText =  document.getElementById('mis_gifos_text');
let iconGifos =  document.getElementById('download_incon_gifos');

