document.addEventListener("DOMContentLoaded", e => {
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    window.addEventListener("scroll", function () {
        let navbar_mobile = document.querySelector("nav");
        navbar_mobile.classList.toggle("sticky", window.scrollY > 0);
    })
})