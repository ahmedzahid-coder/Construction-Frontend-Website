let slides = document.querySelectorAll(".hero-slide");
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto loop every 5 seconds
setInterval(nextSlide, 5000);

// Initial show
showSlide(current);



document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const headerBottomWrapper = document.querySelector('.header-bottom-wrapper');
  if (navToggle && headerBottomWrapper) {
    navToggle.addEventListener('click', () => {
      headerBottomWrapper.classList.toggle('nav-open');
    });
  }
});