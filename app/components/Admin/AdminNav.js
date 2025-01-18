"use client";
import React, { useState } from "react";
import { Menu, X, EarthLock, House } from "lucide-react";
import LogoutButton from "./LogOut";
import effects from "@/app/styles/Effects.module.css";

const AdminNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`${effects.borderEffect} mb-[250px] fixed top-0 left-0 w-full z-50 bg-blue-900/10 text-white shadow-lg border-b-2 border-gray-900`}
    >
      <div className="w-full items-center justify-center flex backdrop-blur">
        <div className="container flex justify-between items-center px-4 py-3">
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isNavOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="./isfsetlogo.png"
              alt="ISFDSUSET Logo"
              className="h-10 w-10 mr-2 rounded-full border-2 border-blue-500"
            />
            <span className="text-lg font-bold">Admin Panel</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden ml-36 md:flex gap-6">
            <li>
              <a
                href="/manage-dashboard"
                className="hover:text-blue-500 transition duration-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/manage-events"
                className="hover:text-blue-500 transition duration-300"
              >
                Manage Events
              </a>
            </li>
            <li>
              <a
                href="/manage-members"
                className="hover:text-blue-500 transition duration-300"
              >
                Manage Members
              </a>
            </li>
            <li>
              <a
                href="/manage-news"
                className="hover:text-blue-500 transition duration-300"
              >
                Manage News
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <a
              href="https://linktr.ee/isfdsuset"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-200 bg-blue-700/50 hover:bg-blue-900 hover:text-white rounded-lg shadow-lg transition-all duration-300"
            >
              Socials
              <EarthLock className="h-6" />
            </a>
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-200 bg-blue-700/50 hover:bg-blue-900 hover:text-white rounded-lg shadow-lg transition-all duration-300"
            >
              Home
              <House className="h-6" />
            </a>
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900/90 text-white shadow-xl transform ${
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
              href="/manage-dashboard"
              className="hover:text-blue-500 transition duration-300"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/manage-events"
              className="hover:text-blue-500 transition duration-300"
            >
              Manage Events
            </a>
          </li>
          <li>
            <a
              href="/manage-members"
              className="hover:text-blue-500 transition duration-300"
            >
              Manage Members
            </a>
          </li>
          <li>
            <a
              href="/manage-news"
              className="hover:text-blue-500 transition duration-300"
            >
              Manage News
            </a>
          </li>
        </ul>
        <div className="px-4 mt-4 space-y-4">
          <a
            href="https://linktr.ee/isfdsuset"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-200 bg-blue-700/50 hover:bg-blue-900 hover:text-white rounded-lg shadow-lg transition-all duration-300"
          >
            Socials
            <EarthLock className="h-6" />
          </a>
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-gray-200 bg-blue-700/50 hover:bg-blue-900 hover:text-white rounded-lg shadow-lg transition-all duration-300"
          >
            Home
            <House className="h-6" />
          </a>
          <LogoutButton />
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
  );
};

export default AdminNav;
