//-------------TRENDING CALL API -------//


async function getTrendings(offset, limit) {
        let search = await fetch((`${API}/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`));
        let trending = await search.json();
        return trending;
}
getTrendings().then(
    resp => drawTrendingGif(resp)
) 


//------------ DRAW TRENDING GIFS -------------//

function drawTrendingGif(data){ 
    trendingContainer.innerHTML = '';
    // call element
    let gif;
    if (window.matchMedia("(min-width: 800px)").matches) {
        /* The screen has at least 960px of width */
        gif = data.data.slice(0,3);
        } else {
        /* The screen has less than 960px of width */
        // limit = 20;
        gif = data.data.slice(0,20);
    }
    
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
            trendingContainer.appendChild(div);
           
           
        });
       // NO RESULTS
    (gif.length === 0) ?  (LeftBtn.style.display = "none") && (trendingTitle.textContent = 'Ups, no hay más GIFOS por acá') && (trendingText.style.display ='none'): (noResults.style.display = 'none') && (trendingText.style.display = 'block') && (trendingTitle.textContent = 'Trending GIFOS');      
    
           
}

// -------------------- BUTTONS EVENTS ---------------------//

LeftBtn.style.display = "none";

RigthBtn.addEventListener('click', ( )=> {
    RigthBtnEvent()
    LeftBtn.style.display = "block";
})

LeftBtn.addEventListener('click', ( )=> {
    LeftBtnEvent()
})

function RigthBtnEvent() {
    offset += 3;
    limit = 3;
    getTrendings(offset).then(
        resp => drawTrendingGif(resp)
    ) 
}

function LeftBtnEvent() {
    offset -= 3;
    limit = 3;
    getTrendings(offset).then(
        resp => drawTrendingGif(resp)
    ) 
    
}

/* function changeLimitMobileDesktop(gif, data) {
  
}; */

