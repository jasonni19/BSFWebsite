import { useEffect } from 'react';

const useSlideUp = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Determine the direction of the slide
          const directionClass = entry.target.getAttribute('data-slide-direction') || 'right';

          if (entry.isIntersecting) {
            // Add the correct slide animation class
            entry.target.classList.add('animate__fadeInUp');
            entry.target.classList.remove('opacity-0');
          } else {
            
          }
        });
      },
      { threshold: 0.40 } 
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element)); // Clean up observer
    };
  }, []);
};

export default useSlideUp;
