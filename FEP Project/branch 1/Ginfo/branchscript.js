document.addEventListener('DOMContentLoaded', () => {
    // --- HERO SLIDER LOGIC ---
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slideInterval = 5000; // 5 seconds
    let autoSlideTimer = null;

    if (slides.length > 0 && dots.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlideIndex = index;
        }

        function nextSlide() {
            let nextIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(nextIndex);
        }

        function startTimer() {
            stopTimer();
            autoSlideTimer = setInterval(nextSlide, slideInterval);
        }

        function stopTimer() {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
            }
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startTimer();
            });
        });

        startTimer();
    }

// Image database grouped by category
const categoryData = {
    fort: [
        { title: "Raigad Fort", location: "Raigad District", img: "https://extranet.traveldhamaka.com/assets/sightseeing/Raigad%20Fort.JPG", link:"../forts/raigad/rai.html" },
        { title: "Sinhagad Fort", location: "Pune District", img: "https://rrtravelscabs.com/wp-content/uploads/2023/11/b3.jpg" },
        { title: "Pratapgad Fort", location: "Satara District (near Mahabaleshwar)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lNisiyWJCMZvIcakJidNgVQQRIJQ72oaeIJK6gyhuHz2A8U_Lq5NSHxn&s=10" },
        { title: "Murud-Janjira Fort", location: "Raigad District (Murud)", img: "https://flybtc.blr1.digitaloceanspaces.com/ncl/blog/gp5U4elAHFjvXy0Fx17IOSOzlDCF7xDcg4xcPfQj.jpg" },
        { title: "Shivneri Fort", location: "Pune District (Junnar)", img: "https://eqiaboov9ot.exactdn.com/wp-content/uploads/2023/10/Shivneri_fort2.jpg?strip=all" },
        { title: "Rajgad Fort", location: "Pune District (Velhe)", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/08/9b/10/rajgad-buruj.jpg?w=1200&h=-1&s=1" },
        { title: "Torna Fort", location: "Pune District (Junnar)", img: "https://www.mtdc.co.in/wp-content/uploads/2019/11/1563865812_1512127259_DKyhm4VVwAAOfG4.jpg.png.jpg" },
        { title: "Harishchandragad", location: "Ahilyanagar district", img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kalbhairav_pinnacle_Scj.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
        { title: "Sindhudurg Fort", location: "Sindhudurg District (Malvan)", img: "https://media.licdn.com/dms/image/v2/D4D22AQEfR92UkToBKw/feedshare-shrink_800/feedshare-shrink_800/0/1697804771880?e=2147483647&v=beta&t=5U3zuUussQMsrF5SEj5775yl-2Bk8ALgB-_7mimb3RE" },
        { title: "Panhala Fort", location: "Kolhapur District", img: "https://www.sawaimansingresort.com/images/panhala-fort/panhala-fort-01.jpg" },
        { title: "Lohagad & Visapur", location: "Pune District (Lonavala/Malavli)", img: "https://pratik18p.wordpress.com/wp-content/uploads/2011/11/dsc_0054.jpg" }
    ],
    Hills: [
        { title: "Kalsubai Peak", location: "Ahilyanagar district", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80", link: "#" },
        { title: "Mahabaleshwar", location: "Satara District", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3aa?auto=format&fit=crop&w=800&q=80", link: "#" },
        { title: "Panchgani", location: "Satara District (near Mahabaleshwar)", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3aa?auto=format&fit=crop&w=800&q=80", link: "#" },
        { title: "Lonavala & Khandala", location: "Lonavala & Khandala", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3aa?auto=format&fit=crop&w=800&q=80", link: "#" },
        { title: "Matheran", location: "Raigad District (near Neral)", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3aa?auto=format&fit=crop&w=800&q=80", link: "#" },
        { title: "Igatpuri", location: "Nashik District", img: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3aa?auto=format&fit=crop&w=800&q=80", link: "#" }
    ]
   
};

function displayCards(items) {
    const gridContainer = document.getElementById('category-grid');
    gridContainer.innerHTML = ''; // Clear container

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'grid-item';

        // Wrap the image inside an <a> tag pointing to targetPage
        card.innerHTML = `
            <a href="${item.targetPage}">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            </a>
        `;

        gridContainer.appendChild(card);
    });
}

const gridContainer = document.getElementById('category-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Function to render items into grid
    function renderCategory(categoryKey) {
        const items = categoryData[categoryKey] || [];
        
        gridContainer.innerHTML = items.map(item => `
            <div class="heritage-card">
                <a href="${item.link}">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="heritage-card-overlay">
                        <h3>${item.title}</h3>
                        <p>${item.location}</p>
                    </div>
                </a>
            </div>
        `).join('');
    }

    // Default view: Load 'fort' category on page launch
    renderCategory('fort');

    // Tab click listeners
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');
            renderCategory(selectedCategory);
        });
    });
});