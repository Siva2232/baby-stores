// Navbar Shrinking Effect on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("h1").style.opacity = "1";
    document.querySelector("h1").style.transform = "translateY(0)";
    document.querySelector("p").style.opacity = "1";
    document.querySelector("p").style.transform = "translateY(0)";
    document.querySelector(".hero-image img").style.opacity = "1";
    document.querySelector(".hero-image img").style.transform = "translateX(0)";
});