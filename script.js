// Scroll effect for navbar
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll and active link highlighting
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

        document.querySelectorAll(".nav-item").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("show");
});
