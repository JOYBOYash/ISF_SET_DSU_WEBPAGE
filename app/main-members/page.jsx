import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MembersCard from "../components/MembersCard";
import CouncilCard from "../components/CouncilCard";
import ScrollAnimation from "@/app/components/ScrollAnimations"

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
         <ScrollAnimation inAnimation="slideInUp" outAnimation="fadeOut">
         <img
            className="w-[200px] sm:w-[300px] rounded-md h-[250px] sm:h-[400px]"
            src="./shanmugamsir.png"
            alt="Advisor"
          />
         </ScrollAnimation>
        </div>
        <div className="flex flex-col gap-2 text-left p-2 sm:p-4">
        <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" delay={0.2}>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Dr. B Shanmugam
          </h1>
          </ScrollAnimation>
          <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" delay={0.4}>
          <h2 className="text-lg sm:text-2xl text-blue-900/70 font-bold">
            Faculty Advisor & Co-Ordinator
          </h2>
          </ScrollAnimation>
          <ScrollAnimation inAnimation="slideInUp" outAnimation="slideOutDown" delay={0.6}>
          <p className="text-sm sm:text-xl text-white/50 w-full sm:w-[800px] mt-2">
           The IETE Students Forum (ISF) is a vibrant and integral part of the IETE ecosystem, designed to nurture the technical and professional skills of students in the fields of electronics, telecommunications, and related disciplines. As the Faculty Advisor, it is both a privilege and a responsibility to guide and support the enthusiastic members of the ISF in their endeavors.
The ISF provides students with a unique platform to engage in technical activities, workshops, seminars, and competitions, fostering innovation and creativity. It encourages collaboration, knowledge sharing, and hands-on learning, which are essential for holistic development. My role as a Faculty Advisor is to mentor students, help them organize events, and ensure that the activities align with the vision and mission of IETE.
One of the key aspects of my role is to facilitate the smooth functioning of the ISF website, which serves as a digital hub for information, updates, and resources. I work closely with the student team to ensure the website is user-friendly, up-to-date, and reflective of the ISF's achievements and activities. This collaboration not only enhances the forum's online presence but also provides students with valuable experience in web management and digital communication.
          </p>
          </ScrollAnimation>
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
