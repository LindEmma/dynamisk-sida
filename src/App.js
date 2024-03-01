/* Emma Lind, Edugrade .NET 23,
labb2 dynamisk cv-sida */

import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume/Resume.js";
import Contact from "./pages/Contact";
import TypingEasterEgg from "./components/EasterEgg/EasterEgg.js";
import "./App.css";
import img from "../src/assets/backgrounds/imga.png";

function App() {
  /* arrow function that change the css style of the page when user clicks on the footer,
  the className of the parent div changes between "light" or "dark" onClick, which creates a dark mode or light mode, uses useState */
  const [style, setStyle] = useState("light");
  const changeStyle = () => {
    if (style !== "light") setStyle("light");
    else setStyle("dark");
  };

  /* Router to navigate pages */
  return (
    <div className={style}>
      <Router>
        <div className="site-container">
          <header className="site-header">
            <Menu />
          </header>
          <main className="site-content">
            <TypingEasterEgg></TypingEasterEgg>
            <Routes>
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route
                path="/resume"
                element={<Resume />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </main>
          <footer
            className="site-footer"
            onClick={changeStyle}
          >
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}
export default App;
