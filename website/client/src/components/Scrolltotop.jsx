import React, { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs only once, when the component first mounts

  return null;
};

export default ScrollToTop;
