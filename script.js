// ---------- Hamburger Menu ----------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ---------- Portfolio Filtering ----------
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ---------- Video Modal Functionality ----------
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close-modal');
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Prevent event from bubbling if needed
    e.stopPropagation();
    const portfolioItem = e.target.closest('.portfolio-item');
    const videoSrc = portfolioItem.getAttribute('data-video');
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load();
    videoModal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  videoModal.style.display = 'none';
  modalVideo.pause();
});

window.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = 'none';
    modalVideo.pause();
  }
});

// ---------- Testimonials Slider ----------
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Auto-rotate slider every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ---------- Real-Time Form Validation ----------
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const interest = document.getElementById('interest').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === "" || interest === "" || message === "") {
    formFeedback.textContent = "Please fill out all fields.";
  } else {
    formFeedback.textContent = "Message sent! Thank you.";
    // Reset the form (or integrate with an AJAX call or Formspree)
    contactForm.reset();
  }
});
