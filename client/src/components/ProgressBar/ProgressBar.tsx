'use client'

import { useEffect } from "react";


const ProgressBar = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleProgress);
    handleProgress();

    return () => {
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  return (
    <div id="progress-bar" className="fixed -top-0 left-0 w-full h-1.5 bg-transparent shadow-lg animate-progress-bar" />
  )
}

const handleProgress = () => {
  const scrollProgress = document.getElementById('progress-bar');
  const headerHeight = document.getElementById('header')?.offsetHeight || 0;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;

  if (scrollProgress) {
    if (scrollTop > headerHeight) {
      const progress = ((scrollTop - headerHeight) / (totalHeight - headerHeight)) * 100;
      scrollProgress.style.width = progress + "%";
    } else {
      scrollProgress.style.width = "0%";
    }
  }
};

export default ProgressBar
