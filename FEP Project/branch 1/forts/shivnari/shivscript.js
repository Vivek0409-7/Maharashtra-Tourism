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

    // 2. Interactive Visit Mode Selector
    const modeButtons = document.querySelectorAll('.mode-btn');
    const modeDesc = document.getElementById('mode-description');

    const descriptions = {
        trek: "The trekking trail starts from the base village of Junnar. It takes roughly 1.5 to 2 hours to hike up through the ancient steps and massive fortification gates.",
        "history-tour": "Take a guided walking tour to deep-dive into the history of Shivaji Maharaj's birth chamber, the Shivai Devi temple, and the historic water cisterns."
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