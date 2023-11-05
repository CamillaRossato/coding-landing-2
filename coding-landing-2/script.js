const slides = document.querySelectorAll('.carousel-slide');
const upArrow = document.querySelector('.up');
const downArrow = document.querySelector('.down');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  currentSlide = slideIndex;
}

upArrow.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

downArrow.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);