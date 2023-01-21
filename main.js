const menuMail = document.querySelector('.navemail');
const desktopMenu = document.querySelector('.dekstop-menu');

menuMail.addEventListener('click', toggleDEsktopMenu);

function toggleDEsktopMenu() {
    desktopMenu.classList.toggle("inactive");

}