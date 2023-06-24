// Array of animation configurations
const animationConfigurations = [
  {
    element: document.getElementById("anim1"),
    animationClass: "animate__backInLeft",
  },
  {
    element: document.getElementById("anim2"),
    animationClass: "animate__bounceInLeft",
  },
  {
    element: document.getElementById("anim3"),
    animationClass: "animate__zoomInDown",
  },
  {
    element: document.getElementById("anim4"),
    animationClass: "animate__slideInUp",
  },
  {
    element: document.getElementById("anim5"),
    animationClass: "animate__slideInUp",
  },
];

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Find anim configuration for the observed element
      const config = animationConfigurations.find(
        (animationConfig) => animationConfig.element === entry.target
      );

      // Apply the animation class to the observed element
      if (config) {
        entry.target.classList.add(config.animationClass);

        // Stop observing the element after it becomes visible once
        observer.unobserve(entry.target);
      }
    }
  });
});

// Observe each animated element
animationConfigurations.forEach((config) => {
  observer.observe(config.element);
});
