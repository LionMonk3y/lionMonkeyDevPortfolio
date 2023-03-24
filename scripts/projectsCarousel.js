let slidePosition = 0;
const slides = document.getElementsByClassName("carouselItem");
const totalSlides = slides.length;

document
  .getElementById("carouselButtonNext")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carouselButtonPrev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carouselItemVisible");
    slide.classList.add("carouselItemHidden");
  }

  slides[slidePosition].classList.add("carouselItemVisible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// AutoPlay

const carouselItems = document.querySelectorAll(".carouselItem");
let currentItemIndex = 0;
const intervalDuration = 5000; // 5 seconds

function goToNextItem() {
  carouselItems[currentItemIndex].classList.remove("carouselItemVisible");
  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  carouselItems[currentItemIndex].classList.add("carouselItemVisible");
}

setInterval(goToNextItem, intervalDuration);
