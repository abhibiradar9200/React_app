import { useRef, useState, useEffect } from "react";

// Custom hook that detects when an element scrolls into view.
// Uses IntersectionObserver to set isInView to true once the element
// is at least 15% visible. Only fires once (does not reset).

function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create an observer that watches for 15% visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

export default useInView;
