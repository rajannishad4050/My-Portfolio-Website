import { useState, useEffect } from "react";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Projects from "./Component/Projects";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
