import { useEffect } from 'react';

const useSlideInOnVisible = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.element-to-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Determine the direction of the slide
          const directionClass = entry.target.getAttribute('data-slide-direction') || 'right';

          if (entry.isIntersecting) {
            // Add the correct slide animation class
            entry.target.classList.add('animate-slide-in-right');
            entry.target.classList.remove('opacity-0'); // Remove opacity when in view
          } else {
            entry.target.classList.add('opacity-0'); // Hide again when out of view
            entry.target.classList.remove('animate-slide-in-right'); // Remove animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element)); // Clean up observer
    };
  }, []);
};

export default useSlideInOnVisible;
