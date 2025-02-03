let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');
let cartBuy = document.querySelectorAll('.new-arrival .box .content');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
    user.classList.remove('active');
}


let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

// navbar scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('shadow', window.scrollY > 0);
    }
});


// swiper
var swiper = new Swiper(".new-arrival", {
    slidesPerView: 3, 
    spaceBetween: 30, 
    centeredSlides: false, 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { // Untuk layar kecil (mobile)
            slidesPerView: 1,
        },
        768: { // Untuk tablet
            slidesPerView: 2,
        },
        1024: { // Untuk desktop
            slidesPerView: 3,
        }
    }
});


