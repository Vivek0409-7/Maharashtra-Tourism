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

    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const categories = document.querySelectorAll('.category-section');
    const noResultsMsg = document.getElementById('noResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let totalVisibleCards = 0;

        categories.forEach(category => {
            const categoryCards = category.querySelectorAll('.card');
            let visibleCardsInCategory = 0;

            categoryCards.forEach(card => {
                const keywords = card.getAttribute('data-keywords') || '';
                const textContent = card.innerText.toLowerCase();

                // Check if search query matches text content or backend keywords
                if (textContent.includes(query) || keywords.includes(query)) {
                    card.style.display = 'flex';
                    visibleCardsInCategory++;
                    totalVisibleCards++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide the whole category section if no cards match inside it
            if (visibleCardsInCategory === 0) {
                category.style.display = 'none';
            } else {
                category.style.display = 'block';
            }
        });

        // Show or hide the global "No Results" message
        if (totalVisibleCards === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Existing Search Bar Logic
    // -------------------------------------------------------------
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const categories = document.querySelectorAll('.category-section');
    const noResultsMsg = document.getElementById('noResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let totalVisibleCards = 0;

            categories.forEach(category => {
                const categoryCards = category.querySelectorAll('.card');
                let visibleCardsInCategory = 0;

                categoryCards.forEach(card => {
                    const keywords = card.getAttribute('data-keywords') || '';
                    const textContent = card.innerText.toLowerCase();

                    if (textContent.includes(query) || keywords.includes(query)) {
                        card.style.display = 'flex';
                        visibleCardsInCategory++;
                        totalVisibleCards++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (visibleCardsInCategory === 0) {
                    category.style.display = 'none';
                } else {
                    category.style.display = 'block';
                }
            });

            if (totalVisibleCards === 0) {
                noResultsMsg.style.display = 'block';
            } else {
                noResultsMsg.style.display = 'none';
            }
        });
    }

    // -------------------------------------------------------------
    // 2. Ashtavinayak Dynamic Interactive Route & Map Data Logic
    // -------------------------------------------------------------
    const ashtavinayakData = [
        {
            stop: 1,
            name: "Mayureshwar (Morgaon)",
            location: "Morgaon, Pune District",
            desc: "The traditional starting point. Lord Ganesha defeated the demon Sindhu riding a peacock. Features fort-like stone architecture and a unique Nandi bull statue at the entrance.",
            highlight: "Peacock Mount & Nandi Idol",
            nextDist: "~65 km to Siddhatek",
            mapQuery: "Shri Mayureshwar Ganpati Mandir, Morgaon"
        },
        {
            stop: 2,
            name: "Siddhivinayak (Siddhatek)",
            location: "Siddhatek, Ahmednagar District",
            desc: "Known as the giver of Siddhi. Situated along the Bhima River, this is the only idol among the eight where the trunk turns to the right.",
            highlight: "Right-turned Trunk",
            nextDist: "~85 km to Theur",
            mapQuery: "Shree Siddhivinayak Temple, Siddhatek"
        },
        {
            stop: 3,
            name: "Chintamani (Theur)",
            location: "Theur, Pune District",
            desc: "Remover of worries. Ganesha retrieved the lost precious jewel (Chintamani) for Sage Kapila here. Located at the confluence of the Mula, Mutha, and Bhima rivers.",
            highlight: "Confluence of 3 Rivers",
            nextDist: "~50 km to Ranjangaon",
            mapQuery: "Chintamani Ganpati Temple, Theur"
        },
        {
            stop: 4,
            name: "Mahaganapati (Ranjangaon)",
            location: "Ranjangaon, Pune District",
            desc: "Represents Ganesha's most powerful form with 10 trunks and 20 arms in lore. Lord Shiva prayed here before defeating the demon Tripurasura.",
            highlight: "Supreme 10-Trunked Form",
            nextDist: "~85 km to Ozar",
            mapQuery: "Maha Ganapati Temple, Ranjangaon"
        },
        {
            stop: 5,
            name: "Vighneshwar (Ozar)",
            location: "Ozar, Pune District",
            desc: "The vanquisher of obstacles. Ganesha defeated the demon of obstacles, Vighnasura. Surrounding walls resemble a fort with rubies set into the idol's eyes.",
            highlight: "Fortified Temple Walls",
            nextDist: "~15 km to Lenyadri",
            mapQuery: "Vighnahar Ganpati Temple, Ozar"
        },
        {
            stop: 6,
            name: "Girijatmaj (Lenyadri)",
            location: "Lenyadri, Pune District",
            desc: "Situated inside Buddhist rock-cut Cave 18 atop a hill, reached by climbing 307 stone steps. Goddess Parvati performed penance here to have Ganesha as her son.",
            highlight: "307 Mountain Steps",
            nextDist: "~140 km to Pali",
            mapQuery: "Girijatmaj Ganpati Temple, Lenyadri"
        },
        {
            stop: 7,
            name: "Ballaleshwar (Pali)",
            location: "Pali, Raigad District",
            desc: "The only Ashtavinayak shrine named directly after an ardent devotee—a young boy named Ballal. The east-facing shrine catches the direct morning sun rays.",
            highlight: "Named After Child Devotee",
            nextDist: "~40 km to Mahad",
            mapQuery: "Ballaleshwar Pali"
        },
        {
            stop: 8,
            name: "Varadvinayak (Mahad)",
            location: "Mahad, Raigad District",
            desc: "Known as the giver of boons. Includes a sacred oil lamp (Nandadeep) burning continuously since 1892. Devotees can directly enter the main sanctum.",
            highlight: "Eternal Lamp (Since 1892)",
            nextDist: "~155 km back to Morgaon",
            mapQuery: "Varadvinayak Temple, Mahad"
        },
        {
            stop: 9,
            name: "Mayureshwar (Morgaon) - Completion",
            location: "Morgaon, Pune District",
            desc: "To complete the traditional Ashtavinayak Yatra circuit according to legend, pilgrims return to Morgaon to offer final prayers.",
            highlight: "Circuit Completion",
            nextDist: "Pilgrimage Complete!",
            mapQuery: "Shri Mayureshwar Ganpati Mandir, Morgaon"
        }
    ];

    let activeIndex = 0;

    // Tracker UI Elements
    const stopTag = document.getElementById('yatra-stop-tag');
    const title = document.getElementById('yatra-temple-title');
    const loc = document.getElementById('yatra-temple-loc');
    const desc = document.getElementById('yatra-temple-desc');
    const highlight = document.getElementById('yatra-highlight');
    const distance = document.getElementById('yatra-distance');
    const progressText = document.getElementById('yatra-progress-text');
    const mapIframe = document.getElementById('ashtavinayakMap');
    const nodesContainer = document.getElementById('nodesContainer');
    const prevBtn = document.getElementById('prevStopBtn');
    const nextBtn = document.getElementById('nextStopBtn');

    // Render numbered node selection bar
    function renderNodes() {
        if (!nodesContainer) return;
        nodesContainer.innerHTML = ashtavinayakData.map((item, index) => `
            <button class="node-btn ${index === activeIndex ? 'active' : ''}" onclick="selectAshtavinayakStep(${index})">
                ${index === 8 ? '🏁' : index + 1}
            </button>
        `).join('');
    }

    // Update active view data and change map location dynamically
    function updateAshtavinayakView() {
        const item = ashtavinayakData[activeIndex];
        if (!item || !title) return;

        stopTag.innerText = `Stop ${item.stop} of 9`;
        title.innerText = item.name;
        loc.innerText = `📍 ${item.location}`;
        desc.innerText = item.desc;
        highlight.innerText = item.highlight;
        distance.innerText = item.nextDist;

        // Calculate and update progress percentage
        const pct = Math.round(((activeIndex + 1) / ashtavinayakData.length) * 100);
        progressText.innerText = `${pct}% Done`;

        // Update Embedded Google Map dynamically with query destination
        const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(item.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        mapIframe.src = mapUrl;

        // Button disabled states
        prevBtn.disabled = activeIndex === 0;
        nextBtn.disabled = activeIndex === ashtavinayakData.length - 1;

        renderNodes();
    }

    // Navigation events
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (activeIndex > 0) {
                activeIndex--;
                updateAshtavinayakView();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (activeIndex < ashtavinayakData.length - 1) {
                activeIndex++;
                updateAshtavinayakView();
            }
        });
    }

    // Global step selector function for node button clicks
    window.selectAshtavinayakStep = function(index) {
        activeIndex = index;
        updateAshtavinayakView();
    };

    // Initialize View
    updateAshtavinayakView();
});
 
// Open the Ashtavinayak temple page when a card (image or text) is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card[data-href]').forEach(card => {
        const go = () => { window.location.href = card.dataset.href; };
        card.addEventListener('click', go);
        card.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    });
});