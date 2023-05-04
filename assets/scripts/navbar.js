// selector
let menu = document.querySelector('.hamburger');
let body = document.querySelector('body');

// method mostrarr y ocultar menu
function toggleMenu(event) {

    event.preventDefault();

    body.classList.toggle('bodyNav');
    this.classList.toggle('is-active');

    document.querySelector(".barraNavegación").classList.toggle("is_active");
    
}

// event
menu.addEventListener('click', toggleMenu, false);

