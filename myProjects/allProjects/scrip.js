// Array of animation configurations
const animationConfigurations = [
    {
      element: document.getElementById("anim1"),
      animationClass: "animate__bounceInDown",
    },
    {
      element: document.getElementById("anim2"),
      animationClass: "animate__bounceInUp",
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