import Button from "@/app/components/Button";
import React from "react";
import effects from "@/app/styles/Effects.module.css";

function About() {
  return (
    <section className="home-about m-[100px] about  py-10">
      <h1 className="text-4xl p-2 font-bold text-left mb-6">About Us</h1>
      <div className="card flex  w-full items-center gap-12 justify-center mx-auto p-6 shadow-md rounded-lg">
        <div className="logo flex items-center justify-center space-x-4 mb-4">
          <img
            src="../ietelogo.png"
            alt="ISF Logo"
            className="iete h-[250px] w-[250px] -mr-12 "
          />
          <img
            src="../dsulogo.png"
            alt="DSU Logo"
            className="dsu h-[220px] w-[220px]"
          />
        </div>
        <div
          className={`${effects.borderEffect} text-center border-b-2  rounded-full flex-col  p-6 w-[800px] flex items-center justify-center`}
        >
          <p className="abouttext text-center text-2xl ">
            ISF-SET is a collaborative initiative taken by our respected faculty
            advisor and club co-ordinator, Dr. B. Shanmugam sir to foster
            innovation and technological prowess among the engineering students
            of DSU. The forum nurtures the spirit of innovation and creativity
            among the students by providing them with a platform to showcase
            their technical skills and knowledge by means of various events and
            workshops.
          </p>
          <Button text="Read More" link="/main-about" styleNav="false" />
        </div>
      </div>
    </section>
  );
}

export default About;
