'use client';

import { useEffect, useState } from 'react';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

const ProgressBar = () => {
  const [show, setShow] = useState<boolean>(false);

  const shouldShowProgressBar = () => {
    const path = window.location.pathname;
    return path.startsWith('/zadania');
  };

  useEffect(() => {
    if (shouldShowProgressBar()) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    const handleProgress = () => {
      const scrollProgress = document.getElementById('progress-bar');
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollProgress) {
        if (scrollTop > headerHeight) {
          const progress =
            ((scrollTop - headerHeight) / (totalHeight - headerHeight)) * 100;
          scrollProgress.style.width = progress + '%';
        } else {
          scrollProgress.style.width = '0%';
        }
      }
    };

    window.addEventListener('scroll', handleProgress);

    const contentContainer = document.getElementById('content-container');

    if (contentContainer) {
      const resizeObserver = new ResizeObserver(() => {
        handleProgress();
      });

      resizeObserver.observe(contentContainer);

      // Wywołaj handleProgress() natychmiast po dodaniu nasłuchiwaczy
      handleProgress();

      return () => {
        window.removeEventListener('scroll', handleProgress);
        resizeObserver.disconnect();
      };
    } else {
      // Jeśli kontener nie został znaleziony, nadal wywołaj handleProgress
      handleProgress();

      return () => {
        window.removeEventListener('scroll', handleProgress);
      };
    }
  }, [show]);

  return show ? (
    <>
      <div
        id="progress-bar"
        style={{ width: '0%' }} // Ustawienie początkowej szerokości na 0%
        className="fixed -top-0 left-0 z-50 h-1.5 animate-progress-bar bg-transparent shadow-lg"
      ></div>
      <ScrollToTop />
    </>
  ) : null;
};

export default ProgressBar;
