import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import styled from "styled-components";
import HomePage from "./containers/HomePage";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import { Menu } from "./components/index";
import Education from "./containers/Education";
import Career from "./containers/Career";
import Contact from "./containers/Contact";
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log("position", position);
    setScrollPosition(position);
  };

  return (
    <>
      <HomePage />
      <Menu scrollPosition={scrollPosition} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Career />
      <Contact />
      <GlobalStyle />
    </>
  );
}

export default App;
