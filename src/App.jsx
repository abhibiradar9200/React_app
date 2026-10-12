import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import About from "./components/About";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Main App — shows the preloader first, then the full site.

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* Show preloader until count reaches 100 */}
      {!preloaderDone && (
        <Preloader onFinished={() => setPreloaderDone(true)} />
      )}

      {/* Show the rest of the site after preloader finishes */}
      {preloaderDone && (
        <>
          <Navbar />
          <Hero preloaderDone={preloaderDone} />
          <Menu />
          <Specials />
          <About />
          <ReservationForm />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
