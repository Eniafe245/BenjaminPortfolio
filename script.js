// Optional: Smooth fade-in animations when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Image Slider JavaScript
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderImages = document.querySelector('.slider-images');

// Auto-slide function
function showNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Update slider position
function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  sliderImages.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Set interval to auto-slide
setInterval(showNextSlide, 7000);

// For manual control (optional) — you can add clickable dots
const sliderDots = document.createElement('div');
sliderDots.classList.add('slider-dots');
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentSlide = i;
    updateSlider();
    updateDots();
  });
  sliderDots.appendChild(dot);
}
document.querySelector('.projects').appendChild(sliderDots);

// Update the dots when sliding
function updateDots() {
  const dots = document.querySelectorAll('.slider-dots span');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) dot.classList.add('active');
  });
}

// Initialize dots
updateDots();

// Typing Text Animation
const typedTextElement = document.getElementById('typed-text');
const textToType = "Hi, I'm Olasele Benjamin";
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typedTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 200);
  }
}

// Start typing animation
typeText();

// Select the sidebar and the toggle button
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

// Add event listener to the hamburger button
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('closed'); // Toggle the 'closed' class
});
