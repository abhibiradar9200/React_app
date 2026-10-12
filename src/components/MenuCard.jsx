import { useState } from "react";
import "./MenuCard.css";

// LOADING ANIMATION 7: Image blur-up.
// The dish image starts blurred and sharpens when it finishes loading.
// We track the loaded state with useState and the img onLoad event.

function MenuCard({ name, price, description, image }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="menu-card">
      {/* Dish image with blur-up effect */}
      <div className="menu-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className={`menu-card__image ${imageLoaded ? "menu-card__image--loaded" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Dish details */}
      <div className="menu-card__body">
        <div className="menu-card__header">
          <h3 className="menu-card__name">{name}</h3>
          <span className="menu-card__price">Rs. {price.toFixed(2)}</span>
        </div>
        <p className="menu-card__desc">{description}</p>
      </div>
    </div>
  );
}

export default MenuCard;
