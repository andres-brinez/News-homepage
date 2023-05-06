// selector
let menuHamburguer = document.querySelector('.hamburger');
let body = document.querySelector('body');

// method mostrar y ocultar menu
function toggleMenu(event) {

    event.preventDefault();

    body.classList.toggle('bodyNav'); // clase para que se ponga oscuso el fondo de la pagina
    this.classList.toggle('is-active');

    document.querySelector(".barraNavegación").classList.toggle("is_active");
    
}

// event para cuanso se haga click 
menuHamburguer.addEventListener('click', toggleMenu, false);


// evento cuando recarga la pantalla
window.addEventListener('load', function(){

    //cuando el tamaño del dispositivo mayor a 758 se debe agregar la clase is_active para que se muestre la barra de navegacion
    if (window.innerWidth > 758) {
        document.querySelector(".barraNavegación").classList.add("is_active");
           
}
});