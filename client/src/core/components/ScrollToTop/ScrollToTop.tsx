'use client';

import { useEffect, useState } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi2';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      }
      if (isVisible && window.scrollY < 150) {
        setIsVisible(false);
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  return (
    <button
      className={`duration-600 fixed bottom-[5vh] h-[50px] w-[50px] cursor-pointer shadow-xl justify-center flex items-center my-auto rounded-lg border-2 border-[#a40066] bg-[#f7ede2] transition-all ease-in-out ${isVisible ? 'right-[3vw] opacity-100' : 'right-[-60px] opacity-0'
        }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <HiChevronDoubleUp aria-label="Arrow pointing up" size={25} color='#a40066' />
    </button>
  );
};

export { ScrollToTop };
