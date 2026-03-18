// Navbar berubah saat scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#000";
    } else {
        nav.style.backgroundColor = "rgba(10,10,10,0.9)";
    }
});

// Form submit (biar tidak reload + ada notif)
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Pesan berhasil dikirim! 🚀");

    form.reset();
});

// Smooth scroll tambahan (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});