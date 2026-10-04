/* ========================================================= */
/* FEATURED SHOWCASE SLIDER LOGIC                            */
/* ========================================================= */
(function() {
  // 1. Element Selectors & Defensive Check
  const container = document.getElementById('featured-showcase-container');
  if (!container) return; // Exit gracefully if component is not found on page

  const slides = container.querySelectorAll('.showcase-card');
  const bgLayer = document.getElementById('showcase-bg-layer');
  const prevBtn = document.getElementById('showcase-prev-trigger');
  const nextBtn = document.getElementById('showcase-next-trigger');

  // 2. State & Timer Variables
  let activeIndex = 0;
  let autoTimer = null;

  // 3. Render/Update Current Active Card & Background
  function renderSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('showcase-active', i === index);
    });

    // Sync ambient background image with current card
    const activeImageSrc = slides[index].querySelector('img').getAttribute('src');
    bgLayer.style.backgroundImage = `url('${activeImageSrc}')`;
  }

  // 4. Slide Navigation Actions
  function nextSlide() {
    activeIndex = (activeIndex + 1) % slides.length;
    renderSlide(activeIndex);
  }

  function prevSlide() {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    renderSlide(activeIndex);
  }

  // 5. Auto Play Control Functions
  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(nextSlide, 3500); // Transitions every 3.5 seconds
  }

  function stopAutoPlay() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // 6. Event Listeners (Controls & Hover Interactions)
  nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // 7. Initial Run
  renderSlide(activeIndex);
  startAutoPlay();
})();


// ==========================================
// TOURISM CAROUSEL JAVASCRIPT
// ==========================================

(function() {
  const component = document.getElementById('ls3d-component');
  if (!component) return;

  const items = component.querySelectorAll('.ls3d-item');
  const prevBtn = document.getElementById('ls3d-prev-control');
  const nextBtn = document.getElementById('ls3d-next-control');
  const totalItems = items.length;

  let activeIdx = Math.floor(totalItems / 2);

  function renderCarousel() {
    items.forEach((item, index) => {
      // Calculate shortest distance in a circular array
      let offset = index - activeIdx;
      
      if (offset > totalItems / 2) {
        offset -= totalItems;
      } else if (offset < -totalItems / 2) {
        offset += totalItems;
      }

      const absOffset = Math.abs(offset);

      const translateX = offset * 190;
      const translateZ = -absOffset * 15;
      const rotateY = offset * -25;
      const scale = 1 - absOffset * 0.04;

      item.style.transform = `
        translateX(${translateX}px) 
        translateZ(${translateZ}px) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;

      item.style.zIndex = 100 - absOffset;
      item.style.opacity = absOffset > 2 ? '0' : '1';
      item.style.pointerEvents = offset === 0 ? 'auto' : 'none';

      item.classList.toggle('ls3d-active', offset === 0);
    });
  }

  // Loop backward infinitely
  prevBtn.addEventListener('click', () => {
    activeIdx = (activeIdx - 1 + totalItems) % totalItems;
    renderCarousel();
  });

  // Loop forward infinitely
  nextBtn.addEventListener('click', () => {
    activeIdx = (activeIdx + 1) % totalItems;
    renderCarousel();
  });

  // Direct click selection
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeIdx = index;
      renderCarousel();
    });
  });

  renderCarousel();
})();

