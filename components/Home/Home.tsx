import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
    </div>
  );

};

export default Home;