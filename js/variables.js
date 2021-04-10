
//-------------- API key-------------------- //
const API = 'https://api.giphy.com/v1/gifs';
const apiKey = '45birQZBv2wEVbnGDxnWsMaSwd69xraZ';

//--------- VARIABLES SEARCH GIFS----------//

let searchInput = document.getElementById('search_input');
let searchButton = document.getElementById('search_button');
let suggestionList = document.getElementById('suggestion_list');
let searchText = document.getElementById('search_text');
let btnSeeMore = document.getElementById('btn_see_more');
let noResults = document.getElementById ('no_results');
let containerResults = document.getElementById('search_result');
let offset = 0;