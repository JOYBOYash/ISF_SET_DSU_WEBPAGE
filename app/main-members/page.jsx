import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MembersCard from "../components/MembersCard";
import CouncilCard from "../components/CouncilCard";

function page() {
  return (
    <div className="flex flex-col gap-4">
      {/* Navbar Section   */}

      <Navbar />

      {/* Hero Section */}

      <Hero
        title="Here's to all the AWESOME people!"
        desc="Our members are all enthusiastic individuals in their respective fields with a constant upskilling attitude."
        btntext="Join Us!"
      />

      {/* Advisor Section */}
      <div className=" w-auto m-12 items-center shadow-lg flex bg-gradient-to-r from-blue-900/10 via-blue-800/30 to-blue-700/60 rounded-lg p-12">
        <div className="flex flex-col items-center m-12">
          <img
            className=" w-[300px] rounded-md h-[400px]"
            src="./shanmugamsir.png"
          ></img>
        </div>
        <div className="flex flex-col  gap-2 text-left p-4">
          <h1 className="text-3xl text-left font-bold">Dr. B Shanmugam Sir </h1>
          <h1 className="text-2xl text-left text-blue-900/70 font-bold">
            Faculty Advisor & Co-Ordinator{" "}
          </h1>

          <p className="text-xl text-white/50 w-[800px] m-2">
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

      <div className="flex flex-col gap-4 items-center m-12">
        <div className="flex flex-col m-6 -ml-[1000px] gap-2 p-2">
          <h1 className="text-5xl font-bold">Office Bearers: </h1>
          <p className="text-lg text-blue-900/80">
            They act as the council body and oversee the forum activities.
          </p>
        </div>

        <CouncilCard adminView />
      </div>

      {/* Members Section */}
      <div className="flex flex-col gap-4 items-center m-12">
        <div className="flex flex-col m-6 -ml-[1000px] gap-2 p-2">
          <h1 className="text-5xl font-bold"> Our Members: </h1>
          <p className="text-lg text-blue-900/80">
            Enthusiastic individuals from various departments of college.
          </p>
        </div>

        <MembersCard adminView />
      </div>

      <Footer />
    </div>
  );
}

export default page;
