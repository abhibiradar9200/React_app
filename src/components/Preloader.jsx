import { useState, useEffect } from "react";
import "./Preloader.css";

// LOADING ANIMATION 1: Page preloader — counter counts from 0 to 100%.
// LOADING ANIMATION 2: Spinner — rotating circle shown inside the preloader.
// When the counter reaches 100, we call onFinished to remove the preloader.

function Preloader({ onFinished }) {
  const [count, setCount] = useState(0);

  // Increment the counter from 0 to 100
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // ~2.5 seconds total

    return () => clearInterval(interval);
  }, []);

  // When count hits 100, wait a brief moment then tell App we're done
  useEffect(() => {
    if (count === 100) {
      const timeout = setTimeout(() => {
        onFinished();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [count, onFinished]);

  return (
    <div className={`preloader ${count === 100 ? "preloader--done" : ""}`}>
      {/* Restaurant name */}
      <h1 className="preloader__name">The Spice Table</h1>

      {/* Spinning circle */}
      <div className="preloader__spinner"></div>

      {/* Percentage counter */}
      <p className="preloader__count">{count}%</p>

      {/* Progress bar */}
      <div className="preloader__bar-track">
        <div
          className="preloader__bar-fill"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Preloader;
