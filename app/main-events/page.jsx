import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import UEvents from "../components/UEvents";
import FEvents from "../components/FEvents";
import EventApplicationForm from "../components/EventApplication";

function page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Events / Workshops"
        desc="We conduct regular events and workshops to foster skill development."
        btntext="Know More"
        btnlink="/main-about"
      />

      {/* Upcoming Events Section */}
      <UEvents adminView />

      {/* Featured Events Section */}
      <FEvents adminView />

      {/* Event Ideas Section */}
      <section className="w-full bg-blue-900/10 p-6 md:p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Heading */}
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light">
            Provide us your valuable{" "}
            <span className="font-bold text-blue-700">Ideas ✨</span>
          </h1>

          {/* Description */}
          <p className="desc text-lg md:text-md text-gray-200 leading-relaxed">
          <span className="text-lg text-blue-700" > More Exciting Events Coming Soon..! <br /> </span>
            Got a cool idea for an event? Our awesome team will bring it to life!{" "}
            <br /> Submit your valuable ideas here, and let’s create something amazing
            together at ISF-SET.
          </p>
        </div>

        {/* Event Application Form */}
        <div className="appform -mt-44 ">
          <EventApplicationForm />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
