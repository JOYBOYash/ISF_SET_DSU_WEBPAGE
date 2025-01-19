import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MembersCard from "../components/MembersCard";
import CouncilCard from "../components/CouncilCard";

function page() {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Here's to all the AWESOME people!"
        desc="Our members are all enthusiastic individuals in their respective fields with a constant upskilling attitude."
        btntext="Join Us!"
      />

      {/* Advisor Section */}
      <div className="w-[320px] m-2 sm:w-auto m-4 sm:m-12 items-center shadow-lg flex flex-col sm:flex-row bg-gradient-to-r from-blue-900/10 via-blue-800/30 to-blue-700/60 rounded-lg p-4 sm:p-12">
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-12">
          <img
            className="w-[200px] sm:w-[300px] rounded-md h-[250px] sm:h-[400px]"
            src="./shanmugamsir.png"
            alt="Advisor"
          />
        </div>
        <div className="flex flex-col gap-2 text-left p-2 sm:p-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Dr. B Shanmugam Sir
          </h1>
          <h2 className="text-lg sm:text-2xl text-blue-900/70 font-bold">
            Faculty Advisor & Co-Ordinator
          </h2>
          <p className="text-sm sm:text-xl text-white/50 w-full sm:w-[800px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Council Section */}
      <div className="flex flex-col gap-4 items-center m-4 sm:m-12">
        <div className="flex flex-col gap-2 p-2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold">Office Bearers:</h1>
          <p className="text-sm sm:text-lg text-blue-900/80">
            They act as the council body and oversee the forum activities.
          </p>
        </div>
       <div className="m-4 p-2">
       <CouncilCard adminView />
       </div>
      </div>

      {/* Members Section */}
      <div className="flex flex-col gap-4 items-center m-4 sm:m-12">
        <div className="flex flex-col gap-2 p-2 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold">Our Members:</h1>
          <p className="text-sm sm:text-lg text-blue-900/80">
            Enthusiastic individuals from various departments of college.
          </p>
        </div>
        <div className="m-2 p-2">
        <MembersCard adminView />
       </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default page;
