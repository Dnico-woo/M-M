const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const logo = document.querySelector("#logo-mobile")

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    logo.classList.toggle('is-active')
});
