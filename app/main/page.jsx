"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./sections/About";
import Events from "./sections/Events";
import Hero from "../components/Hero";
import Members from "./sections/Members";
import News from "./sections/News";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar Section   */}

      <Navbar />

      {/* Hero Section */}

      <Hero
        title=" IETE STUDENTS FORUM - SET"
        desc="  A platform for innovation and technology enthusiasts @ DSU"
        btntext="Join Us"
        btnlink="/main-members"
        showButton="true"
      />

      {/* About Section */}

      <About />

      {/* Events Section */}
      <Events />

      {/* Members Section */}

      <Members />

      {/* News Section */}
      <News />

      <Footer />
    </div>
  );
};

export default HomePage;
