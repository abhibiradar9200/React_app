import "./Hero.css";

// LOADING ANIMATION 6: Fade / slide-in on load.
// The hero headline and button animate in after the preloader finishes.
// We use the preloaderDone prop to add a CSS class that triggers the animation.

function Hero({ preloaderDone }) {
  return (
    <section id="home" className="hero">
      {/* Dark overlay on top of the background image */}
      <div className="hero__overlay"></div>

      {/* Hero content — animated in when preloader is done */}
      <div className={`hero__content ${preloaderDone ? "hero__content--visible" : ""}`}>
        <h1 className="hero__title">Fresh food, made with love</h1>
        <p className="hero__text">
          At The Spice Table, every dish tells a story. We blend bold spices
          with fresh ingredients to create meals that warm your heart and
          delight your taste buds.
        </p>
        <a href="#reservation" className="hero__button">
          Reserve a Table
        </a>
      </div>
    </section>
  );
}

export default Hero;
