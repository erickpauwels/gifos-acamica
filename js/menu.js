//-----------------------VARIABLES ---------------
const burger = document.getElementById('hamburger_menu');
const menuMobile = document.getElementById('menu_mobile');
const sticky_nav = document.querySelector('header');
//---------------------EVENT CLICK----------------

burger.addEventListener('click', () =>{
    burger.classList.toggle('hamburguer_active');
    menuMobile.classList.toggle('menu_active');
    sticky_nav.classList.toggle('sticky_menu');
});

