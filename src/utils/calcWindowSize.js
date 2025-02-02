import { useState, useEffect } from "react";

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function calcWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  // Apply debouncing to the resize handler
  const debouncedChangeWindowSize = debounce(changeWindowSize, 200);

  useEffect(() => {
    window.addEventListener("resize", debouncedChangeWindowSize);

    return () => {
      window.removeEventListener("resize", debouncedChangeWindowSize);
    };
  }, [debouncedChangeWindowSize]);

  return windowSize;
}