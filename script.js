// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {

            item.classList.add("active");

        }

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! Your message has been received."
    );

    contactForm.reset();

});