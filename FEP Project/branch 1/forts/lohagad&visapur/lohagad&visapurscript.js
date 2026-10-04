document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark/Light Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    themeToggleBtn.addEventListener('click', () => {
        let currentTheme = body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });

    // 2. Interactive Ascent Mode Selector
    const modeButtons = document.querySelectorAll('.mode-btn');
    const modeDesc = document.getElementById('mode-description');

    const descriptions = {
        route1: "Starting Point: Malavli Railway Station... Route: Malavli → Lohagadwadi → Lohagad Fort... Approximate Time: 2–3 hours one way... A popular trekking route through village paths and stone steps leading towards Lohagad Fort.",
        route2: "Starting Point: Patan Village / Malavli...  Route: Base Village → Visapur Fort... Approximate Time: 2–3 hours one way... A scenic and rugged trekking route through mountain paths leading to the Visapur plateau."
    };

    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const mode = button.getAttribute('data-mode');
            modeDesc.textContent = descriptions[mode];
        });
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 4. Hero Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const dots = document.querySelectorAll('.slider-dots .dot');
let autoSlideInterval;

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Make currentSlide accessible globally for onclick attributes in HTML
window.currentSlide = function(index) {
    slideIndex = index;
    showSlide(slideIndex);
    startAutoSlide(); // Reset auto-play timing when manually clicked
};

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000); // Transitions every 4 seconds
}

// Initialize Slider
if (slides.length > 0) {
    showSlide(slideIndex);
    startAutoSlide();
}