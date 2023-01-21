const menuMail = document.querySelector('.navemail');
const menuMobile = document.querySelector('.menu');
const cart = document.querySelector('.navcart');


const desktopMenu = document.querySelector('.dekstop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');



menuMail.addEventListener('click', toggleDEsktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCart);

function toggleDEsktopMenu() {
    shoppingCart.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    shoppingCart.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCart.classList.toggle("inactive");
}