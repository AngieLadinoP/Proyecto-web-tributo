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