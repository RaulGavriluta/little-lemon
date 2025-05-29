import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const MenuScroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); 

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById('nav');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 text-brand-yellow cursor-pointer
    transition-opacity duration-300
    ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <FaArrowCircleUp size={40} />
    </button>
  );
};

export default MenuScroll;
