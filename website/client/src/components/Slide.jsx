import { useEffect } from 'react';

const useSlideInOnVisible = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.element-to-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Determine the direction of the slide
          

          if (entry.isIntersecting) {
            // Add the correct slide animation class
            entry.target.classList.add('animate-slide-in-right');
            entry.target.classList.remove('opacity-0'); // Remove opacity when in view
          } else {
            
          }
        });
      },
      { threshold: 0.90 } 
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element)); // Clean up observer
    };
  }, []);
};

export default useSlideInOnVisible;
