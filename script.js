let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// Toggle the active class on navbar when menu is clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Prevent navbar from opening when scrolling
window.onscroll = () => {
    // No longer toggling navbar on scroll
    menu.classList.remove('fa-times');
    // The navbar will not automatically close on scroll unless clicked
};


// Open search form when clicked on search icon
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

// Close search form when clicked on close button
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Home page slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});