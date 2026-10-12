import { useState, useEffect } from "react";
import "./BackToTop.css";

// BackToTop button — appears when the user scrolls past 400px.
// Clicking it smoothly scrolls back to the top of the page.

function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`back-to-top ${visible ? "back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

export default BackToTop;
