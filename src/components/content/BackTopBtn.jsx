import React, { useState, useEffect } from 'react';

// import link
import {animateScroll as scroll } from 'react-scroll';
// import icon
import { MdKeyboardArrowUp } from 'react-icons/md';

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className='bg-bondi-blue-600  hover:bg-bondi-blue-700 text-white w-14 h-14 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center animate-bounce'
        >
          <MdKeyboardArrowUp className='w-6 h-6' />
        </button>
      )
    );
  }
};

export default BackTopBtn;