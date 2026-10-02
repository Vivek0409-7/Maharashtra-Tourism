function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navbar").classList.remove("active");
    });
});


/* DARK / LIGHT THEME */

function toggleTheme() {
    const body = document.body;
    const button = document.querySelector(".theme-btn");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        button.innerHTML = "☀️ Light";
    } else {
        button.innerHTML = "🌙 Dark";
    }
}


/* CURRENT TIME */

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";
    let displayHour = hours % 12;

    if (displayHour === 0) {
        displayHour = 12;
    }

    const currentTime =
        displayHour + ":" + minutes + ":" + seconds + " " + period;

    console.log("Current time:", currentTime);
}

setInterval(updateTime, 1000);
updateTime();

console.log("🚩 Jay Hari Vitthal! Welcome to Explore Pandharpur!");


/* MAP BUTTON */

const mapButtons = document.querySelectorAll(".map-buttons a");

mapButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Opening Google Maps...");
    });
});