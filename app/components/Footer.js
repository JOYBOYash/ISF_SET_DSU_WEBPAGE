import React from "react";
import effects from "@/app/styles/Effects.module.css";
import {
  Facebook,
  Twitter,
  Instagram,
  ArrowUpCircle,
  Youtube,
  Linkedin,
  PenSquare,
} from "lucide-react";
import FeedbackForm from "./FeedbackForm";

const Footer = () => {
  return (
    <footer
      className={`${effects.borderEffect} footer border-t-2 mt-12 bg-blue-900/5 h-[520px] text-gray-100 py-8 px-4`}
    >
      <div className="foot flex items-between gap-6 max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <div className="space-y-4 m-12">
          <FeedbackForm />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="parts flex gap-10 m-10">
            {/* Location Section */}
            <div className=" w-[300px] space-y-2">
              <h2 className="text-xl text-blue-900 font-semibold ">Location</h2>
              <p>NH-45, Trichy-Chennai Trunk Road,</p>
              <p>Near Samayapuram Toll Plaza,</p>
              <p>Tiruchirapalli Dt., TamilNadu,</p>
              <p>India - 621112.</p>
            </div>

            {/* Contact Section */}
            <div className="space-y-2">
              <h2 className="text-xl text-blue-900 font-semibold ">Reach out</h2>
              <p>Phone: (+91) 6303422588</p>
              <p>Email: isfdsuset@gmail.com</p>
              <div className="flex items-center space-x-2">
                <label className="text-white">Socials:</label>
                <a
                  href=" https://linktr.ee/isfdsuset"
                  className="hover:pointer text-blue-600 hover:text-blue-900"
                >
                  https://linktr.ee/isfdsuset
                </a>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col  space-y-4">
              <h2 className="text-xl text-blue-900/30 font-semibold text-blue-900">Follow Us</h2>
              <div className="flinks flex flex-col text-center  justify-center  p-2 gap-2 space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex ml-[12px] items-center space-x-2 text-blue-400 hover:text-blue-200 transition"
                >
                  <Facebook className="w-6 h-6" />
                  <span>FaceBook</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-200 transition"
                >
                  <Twitter className="w-6 h-6" />
                  <span>Twitter</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-200 transition"
                >
                  <Instagram className="w-6 h-6" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-200 transition"
                >
                  <Youtube className="w-6 h-6" />
                  <span>Youtube</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-200 transition"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>
          {/* Back to Top Link */}
          <div className="flex flex-col items-center justify-between gap-4 text-center mt-6">
            <a
              href="#hero"
              className="flex items-center w-[150px] justify-center gap-2 text-blue-300 hover:text-blue-100 transition"
            >
              <ArrowUpCircle className="w-6 h-6" />
              <span>Go back to Top</span>
            </a>

            <a
              href="/manage-admin-login"
              className="flex items-center w-[250px] justify-center gap-2 text-blue-300/10 hover:text-blue-100/20 transition"
            >
              <PenSquare className="w-6 h-6" />
              <span>Get Admin Access </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
