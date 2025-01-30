"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import effects from "@/app/styles/Effects.module.css";
import ScrollAnimation from "./ScrollAnimations";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
   <ScrollAnimation inAnimation="fadeIn">
     <nav
      className={`${effects.borderEffect} fixed top-0 border-b-2 left-0 w-full z-50 bg-blue-900/10 text-white shadow-lg`}
    >
     <div className=" w-full items-center justify-center flex backdrop-blur ">
     <div className="container flex justify-between items-center px-4 py-3">
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isNavOpen ? <X size={2} /> : <Menu size={32} />}
          </button>
        </div>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="../isfsetlogo.png"
            alt="ISFDSUSET Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-lg font-bold">ISF - SET</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden ml-36 md:flex gap-6">
          <li>
            <a
              href="/main"
              className="hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/main-about"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/main-events"
              className="hover:text-blue-500 transition duration-300"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/main-members"
              className="hover:text-blue-500 transition duration-300"
            >
              Members
            </a>
          </li>
          <li>
            <a
              href="/main-news"
              className="hover:text-blue-500 transition duration-300"
            >
              News
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            link="https://linktr.ee/isfdsuset"
            styleNav="true"
            text="Socials"
            openNewTab={true}
          />
          <Button
            link="https://www.iete.org/"
            styleNav="true"
            text="IETE"
            openNewTab={true}
          />
        </div>
      </div>
     </div>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900/30 text-white shadow-xl transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-900/30">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X size={32} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <a
              href="/main"
              className="hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/main-about"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/main-events"
              className="hover:text-blue-500 transition duration-300"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/main-members"
              className="hover:text-blue-500 transition duration-300"
            >
              Members
            </a>
          </li>
          <li>
            <a
              href="/main-news"
              className="hover:text-blue-500 transition duration-300"
            >
              News
            </a>
          </li>
        </ul>
        <div className="px-4 mt-4">
          <Button
            link="https://linktr.ee/isfdsuset"
            styleNav="true"
            text="Socials"
            openNewTab={true}
          />
          <Button
            link="https://www.iete.org/"
            styleNav="true"
            text="IETE"
            openNewTab={true}
            className="mt-4"
          />
        </div>
      </div>

      {/* Overlay when side navigation is open */}
      {isNavOpen && (
        <div
          onClick={toggleNav}
          className="fixed inset-0 bg-black/70 z-30 md:hidden"
        ></div>
      )}
    </nav>
   </ScrollAnimation>
  );
};

export default Navbar;
