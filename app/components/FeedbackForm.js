"use client";
import React, { useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimations"

function FeedbackForm() {
  const formRef = useRef(null); // To reference the form
  const [resultMessage, setResultMessage] = useState(""); // To store result message
  const [resultClass, setResultClass] = useState("text-gray-500"); // To manage result message styling

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    setResultMessage("Please wait...");
    setResultClass("text-gray-500");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const jsonResponse = await response.json();
      if (response.status === 200) {
        setResultMessage(jsonResponse.message);
        setResultClass("text-green-500");
      } else {
        setResultMessage(jsonResponse.message);
        setResultClass("text-red-500");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
      setResultClass("text-red-500");
    } finally {
      formRef.current.reset();
      setTimeout(() => setResultMessage(""), 5000);
    }
  };

  return (
    <ScrollAnimation  inAnimation="fadeIn" outAnimation="fadeOut">
      <div className="feed flex items-center h-[300px] text-gray-100">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto my-10 p-5 rounded-md shadow-lg ">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-white">
              Contact Us
            </h1>
            <p className="text-blue-300">
              Fill up the form below to send us a message.
            </p>
            <p className={`text-base text-center ${resultClass}`}>
              {resultMessage}
            </p>
          </div>
          <div className="sects h-[300px]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id="botcheck"
                style={{ display: "none" }}
              />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm text-blue-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    placeholder="John"
                    required
                    className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/80 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-blue-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/80 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-blue-200"
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/80 text-white border border-blue-600 rounded-md  h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-blue-600/20 transition ease-in-out rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default FeedbackForm;
