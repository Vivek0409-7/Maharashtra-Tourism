const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(".reveal");
const experienceCards = document.querySelectorAll(".experience-card");
const experienceImage = document.getElementById("experienceImage");
const experienceIcon = document.getElementById("experienceIcon");
const experienceNumber = document.getElementById("experienceNumber");
const experienceTitle = document.getElementById("experienceTitle");
const experienceDescription = document.getElementById("experienceDescription");
const exploreExperience = document.getElementById("exploreExperience");
const themeBtn = document.getElementById("themeBtn");
const backBtn = document.getElementById("backBtn");
const navigationLinks = document.querySelectorAll('.navbar a[href^="#"]');
const hero = document.querySelector(".hero");

let selectedExperience = document.querySelector(".experience-card.active");

// Navbar Scroll Background & Hero Parallax Effect
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const scrollPosition = window.scrollY;
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.35}px`;
    }
});

// Scroll Reveal Animations
function revealOnScroll() {
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 80) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dynamic Experience Card Switcher
function selectExperience(card) {
    experienceCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");
    selectedExperience = card;

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

// Featured Experience Explore Button Action
exploreExperience.addEventListener("click", () => {
    if (!selectedExperience) {
        selectedExperience = document.querySelector(".experience-card.active");
    }
    const title = selectedExperience.dataset.title;
    const targetMap = {
        "Divine Darshan": "temple",
        "Ancient Wonders": "places",
        "Fortress Trails": "places",
        "Architectural Details": "gallery"
    };
    if (targetMap[title]) {
        document.getElementById(targetMap[title]).scrollIntoView({ behavior: "smooth" });
    }
});

// Theme Toggle (Dark / Light Mode) with Local Storage Persistence
if (localStorage.getItem("grishneshwar-theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("grishneshwar-theme", isDark ? "dark" : "light");
});

// Back Button Action
backBtn.addEventListener("click", () => {
    if (document.referrer !== "") {
        history.back();
    } else {
        window.location.href = "#home";
    }
});

// Smooth Navigation Links Scroll
navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});