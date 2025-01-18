import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../main/sections/About";
import Hero from "../components/Hero";
import Agenda from "./sections/Agenda";
import Highlights from "./sections/Highlights";

function page() {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar Section   */}

      <Navbar />

      {/* Hero Section */}

      <Hero
        title=" ABOUT ISF-SET"
        desc=" Our motto is - “Sparking Innovation, Powering
Progress”"
        btntext="Join Us"
      />

      {/* About Section */}

      <About />

      <Agenda />

      <Highlights />

      <Footer />
    </div>
  );
}

export default page;
