import useInView from "../hooks/useInView";
import "./About.css";

// About section — short restaurant story plus 3 stats.
// EFFECT: Scroll reveal — fades in when scrolled into view.

// Stats to display
const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "50+", label: "Dishes on the Menu" },
  { number: "5000+", label: "Happy Guests" },
];

function About() {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      id="about"
      className={`about reveal ${isInView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          A tradition of flavour, passed down through generations
        </p>

        <div className="about__content">
          {/* Restaurant story */}
          <div className="about__story">
            <p>
              The Spice Table started as a small family kitchen in 2014 with one
              simple goal — to bring honest, flavourful food to our community.
              Our recipes blend traditional spices with modern techniques,
              creating dishes that feel both familiar and exciting.
            </p>
            <p>
              Every ingredient is hand-picked, every sauce is made from scratch,
              and every plate is served with love. Whether you're here for a
              quick lunch or a special evening out, we want you to feel at home.
            </p>
          </div>

          {/* Stats cards */}
          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
