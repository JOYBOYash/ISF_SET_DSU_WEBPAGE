import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import ScrollAnimation from "@/app/components/ScrollAnimations";

function page() {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Get Latest News !"
        desc="We are glad for your interest, follow us on socials and get latest updates quickly!"
        btntext="Join Us"
      />

      {/* News Card Section */}
      <div className="p-4 md:p-6">
        <NewsCard adminView />
      </div>

      {/* Socials Section */}
      <div className="flex flex-col md:flex-row items-center shadow-lg bg-gradient-to-r from-blue-900/10 via-blue-800/30 to-blue-700/60 rounded-lg p-6 md:p-12 gap-6">
        {/* Image Section */}
        <div className="flex flex-col items-center">
        <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" >
          <img
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-md"
            src="./linktree-socials.png"
            alt="Socials"
          />
           </ScrollAnimation>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 text-center md:text-left">
        <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" delay={0.2}>   
            <h1 className="text-4xl md:text-7xl font-bold text-white">
            Follow Us!
            </h1>
            </ScrollAnimation>
          <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" delay={0.4}>
          <h2 className="text-lg md:text-2xl font-semibold text-blue-900/70">
            Get the latest updates regarding the forum and its activities!
          </h2>
          </ScrollAnimation>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
