import React from "react";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden h-full">
      <Banner />
      <Nav />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
