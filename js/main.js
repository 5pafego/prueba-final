// Menú hamburguesa en pantallas pequeñas
	let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Botón back to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add("show"); // Añadimos la clase 'show'
    } else {
        backToTopBtn.classList.remove("show"); // Eliminamos la clase 'show'
    }
}

document.getElementById("backToTopBtn").addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});