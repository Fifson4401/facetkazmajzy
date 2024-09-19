"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [show, setShow] = useState<boolean>(false);

  const shouldShowProgressBar = () => {
    const path = window.location.pathname;
    return path.startsWith("/zadania");
  };

  useEffect(() => {
    if (shouldShowProgressBar()) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    const handleProgress = () => {
      const scrollProgress = document.getElementById("progress-bar");
      const headerHeight = document.getElementById("header")?.offsetHeight || 0;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollProgress) {
        if (scrollTop > headerHeight) {
          const progress =
            ((scrollTop - headerHeight) / (totalHeight - headerHeight)) * 100;
          scrollProgress.style.width = progress + "%";
        } else {
          scrollProgress.style.width = "0%";
        }
      }
    };

    window.addEventListener("scroll", handleProgress);
    handleProgress();

    return () => {
      window.removeEventListener("scroll", handleProgress);
    };
  }, [show]);

  return show ? (
    <div
      id="progress-bar"
      className="fixed -top-0 left-0 w-full h-1.5 bg-transparent shadow-lg animate-progress-bar z-50"
    />
  ) : null;
};

export default ProgressBar;
