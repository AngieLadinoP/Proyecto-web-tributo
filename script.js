const body = document.querySelector(".body");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector(".menu__icon--hamburger");
const closeButton = document.querySelector(".menu__icon--close");



/* Show menu links */
function showMenu() {
    menu.classList.add("nav__menu--active");
    menuButton.classList.add("hide");
    closeButton.classList.add("show");
    body.classList.add("disabledScroll");
}

/* Hide menu links */
function hideMenu() {
    menu.classList.remove("nav__menu--active");
    menuButton.classList.remove("hide");
    closeButton.classList.remove("show");
    body.classList.remove("disabledScroll");
}



window.onscroll = function() {
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    showCards();
}



const arrayImg = document.querySelectorAll('.galery__img') // Get all elements from DOM with this class

arrayImg.forEach(function(img) {
    img.addEventListener("click", function() {
        removeActiveClasses();
        img.classList.add("galery__img--active");
    })
});


function removeActiveClasses() {
    arrayImg.forEach(function(img) {
        img.classList.remove("galery__img--active");
    });
}