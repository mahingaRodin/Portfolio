// components/Home/Home.tsx
"use client";
import React, { useState } from "react";
import Nav from "./Navbar/Nav";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  return (
    <div className="h-[1000px]">
      <Nav openNav={openNav} />
      {/* Add your other components here */}
    </div>
  );
};

export default Home;
