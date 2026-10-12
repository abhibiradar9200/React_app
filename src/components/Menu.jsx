import { useState, useEffect } from "react";
import menuItems from "../data/menu";
import useInView from "../hooks/useInView";
import MenuCard from "./MenuCard";
import SkeletonCard from "./SkeletonCard";
import "./Menu.css";

// Menu section — category tabs that filter dishes.
// LOADING ANIMATION 3: Skeleton cards shown for 2 seconds on first load.
// LOADING ANIMATION 4: Bouncing dots shown briefly when switching tabs.
// EFFECT: Scroll reveal — section fades in when it enters the viewport.

// List of category tabs
const categories = ["Starters", "Mains", "Desserts", "Drinks"];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [isLoading, setIsLoading] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);

  // Hook for scroll reveal effect
  const [sectionRef, isInView] = useInView();

  // Simulate a 2-second loading delay on first render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle category tab click — show bouncing dots briefly
  function handleTabClick(category) {
    if (category === activeCategory) return;
    setIsSwitching(true);
    setActiveCategory(category);

    // Show bouncing dots for 0.5 seconds
    setTimeout(() => {
      setIsSwitching(false);
    }, 500);
  }

  // Filter dishes by the active category
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className={`menu reveal ${isInView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">
          Explore our carefully crafted dishes made with the finest ingredients
        </p>

        {/* Category tabs */}
        <div className="menu__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__tab ${activeCategory === cat ? "menu__tab--active" : ""}`}
              onClick={() => handleTabClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content area: skeletons, bouncing dots, or real cards */}
        {isLoading ? (
          // LOADING ANIMATION 3: Skeleton cards
          <div className="menu__grid">
            {[1, 2, 3].map((n) => (
              <SkeletonCard key={n} />
            ))}
          </div>
        ) : isSwitching ? (
          // LOADING ANIMATION 4: Bouncing dots
          <div className="menu__dots">
            <span className="menu__dot"></span>
            <span className="menu__dot"></span>
            <span className="menu__dot"></span>
          </div>
        ) : (
          // Real menu cards
          <div className="menu__grid">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;
