import { useState, useEffect } from "react";

const useSlide = (slideCount, interval = 4000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [slideCount, interval]);

  return activeIndex;
};

export default useSlide;
