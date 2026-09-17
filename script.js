// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
    } else {
        navbar.style.padding = "18px 0";
    }
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    contactForm.reset();
});


// =========================
// CLOSE MOBILE NAVBAR
// =========================

const navLinks = document.querySelectorAll(".nav-link");
const navbarMenu = document.getElementById("navbarNav");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarMenu);

            if (bsCollapse) {
                bsCollapse.hide();
            }
        }

    });
});