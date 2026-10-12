import { useState } from "react";
import useInView from "../hooks/useInView";
import menuItems from "../data/menu";
import "./Specials.css";

// Chef's specials — 3 featured dishes with a "Chef's Pick" badge.
// EFFECT: Scroll reveal — cards fade in when the section enters the viewport.

// Pick 3 specific dishes as chef's specials
const specialIds = [3, 5, 7]; // Paneer Tikka, Butter Chicken, Tiramisu
const specialDishes = menuItems.filter((item) => specialIds.includes(item.id));

function Specials() {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      id="specials"
      className={`specials reveal ${isInView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Chef's Specials</h2>
        <p className="section-subtitle">
          Hand-picked favourites from our head chef
        </p>

        <div className="specials__grid">
          {specialDishes.map((dish) => (
            <SpecialCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual special card with image blur-up and badge
function SpecialCard({ dish }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="special-card">
      {/* Chef's Pick badge */}
      <span className="special-card__badge">Chef's Pick</span>

      {/* Dish image with blur-up */}
      <div className="special-card__image-wrapper">
        <img
          src={dish.image}
          alt={dish.name}
          className={`special-card__image ${imageLoaded ? "special-card__image--loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Dish details */}
      <div className="special-card__body">
        <h3 className="special-card__name">{dish.name}</h3>
        <p className="special-card__desc">{dish.description}</p>
        <span className="special-card__price">RS. {dish.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Specials;
