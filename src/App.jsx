import React, { useState, useEffect } from "react";
import AboutMe from "../src/components/AboutMe/AboutMe.jsx";
import ContactMe from "../src/components/ContactMe/ContactMe.jsx";
import Hero from "../src/components/Hero/Hero.jsx";
import Projects from "../src/components/Projects/Projects.jsx";
import Stack from "../src/components/Stack/Stack.jsx";
import Loader from "../src/components/Loader/Loader.jsx";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="App">
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={18}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      )}
      <Loader />
      <Hero />
      <Stack />
      <Projects />
      <AboutMe />
      <ContactMe />
    </main>
  );
}

export default App;
