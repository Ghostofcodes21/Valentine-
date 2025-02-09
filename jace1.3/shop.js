document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".prev");
  const nextButton = slider.querySelector(".next");

  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = slider.offsetWidth; // Ensure this gets the correct width
    slides.style.transform = 'translateX(-${currentIndex * slideWidth}px)'; // Use backticks
  };

  // Next button functionality
  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.children.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Previous button functionality
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Adjust slider on window resize
  window.addEventListener("resize", updateSlider);
});
  });