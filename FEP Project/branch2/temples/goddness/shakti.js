const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(".reveal");
const experienceCards = document.querySelectorAll(".experience-card");
const experienceImage = document.getElementById("experienceImage");
const experienceIcon = document.getElementById("experienceIcon");
const experienceNumber = document.getElementById("experienceNumber");
const experienceTitle = document.getElementById("experienceTitle");
const experienceDescription = document.getElementById("experienceDescription");
const themeBtn = document.getElementById("themeBtn");
const navigationLinks = document.querySelectorAll('.navbar a[href^="#"]');
const hero = document.querySelector(".hero");

// Scroll navbar and background parallax
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const scrollPosition = window.scrollY;
    if (scrollPosition < window.innerHeight && hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.35}px`;
    }
});

// Reveal elements on scroll
function revealOnScroll() {
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 80) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Interactive Switcher Logic
function selectExperience(card) {
    experienceCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");

    experienceTitle.textContent = card.dataset.title;
    experienceNumber.textContent = card.dataset.number;
    experienceIcon.textContent = card.dataset.icon;
    experienceDescription.textContent = card.dataset.description;

    experienceImage.style.opacity = "0";
    setTimeout(() => {
        experienceImage.src = card.dataset.image;
        experienceImage.style.opacity = "1";
    }, 250);
}

experienceCards.forEach(card => {
    card.addEventListener("click", () => selectExperience(card));
});

// Persistent Light/Dark Theme Toggle
if (localStorage.getItem("shakti-theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeBtn) themeBtn.textContent = "☀️";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        themeBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("shakti-theme", isDark ? "dark" : "light");
    });
}

// Smooth navigation scroll
navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});