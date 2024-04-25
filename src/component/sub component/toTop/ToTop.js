import React, { useState, useEffect } from 'react';
import './toTop.css'
// import { FaArrowUp } from 'react-icons/fa'; 

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div data-aos='fade-left'
         className="ToTop" onClick={scrollToTop}>
                <i className="fa fa-chevron-up i"></i>
        </div>
      )}
    </>
  );
};

export default ToTop;
