
//-------------- API key-------------------- //
const API = 'https://api.giphy.com/v1/gifs';
const apiKey = '45birQZBv2wEVbnGDxnWsMaSwd69xraZ';

//--------- VARIABLES SEARCH GIFS----------//

let searchInput = document.getElementById('search_input');
let searchButton = document.getElementById('search_button');
let suggestionList = document.getElementById('suggestion_list');
let searchText = document.getElementById('search_text');
let trendingP = document.getElementById('trending_p');

// ----------VARIABLES RESULTS -----------//
let btnSeeMore = document.getElementById('btn_see_more');
let noResults = document.getElementById ('no_results');
let containerResults = document.getElementById('search_result');
let offset = 0;
let hr = document.getElementById('hr');

// -----------VARIABLES MODAL -----------//
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close_modal');
let moveLeftBtn = document.getElementById('left_div');
let moveRigthBtn = document.getElementById('rigth_div');
let gifExpanded = document.getElementById('gif_expanded');

// ------------- VARIABLES TRENDING -------//
let trendingContainer = document.getElementById('trending_gifs');
let LeftBtn = document.getElementById('left_btn');
let RigthBtn = document.getElementById('rigth_btn');
let trendingText = document.getElementById('trending_text');
let trendingTitle = document.getElementById('trending_title');