"use client";
import React, { useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimations";
function EventApplicationForm() {
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
   <ScrollAnimation inAnimation="fadeIn" outAnimation="slideOutDown">
     <div className="flex items-center justify-center min-h-screen px-4 text-gray-100">
      <div className="container max-w-xl  p-5 bg-blue-900/30 rounded-md shadow-lg">
        <div className="text-center mb-4">
          <p className={`text-base ${resultClass}`}>{resultMessage}</p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
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

          {/* Full Name and Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm text-blue-900/30"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="first_name"
                placeholder="John"
                required
                className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/30 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-blue-900/30"
              >
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/30 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* WhatsApp Number and Department */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm text-blue-900/30"
              >
                WhatsApp No:
              </label>
              <input
                type="text"
                name="whatsapp number"
                id="number"
                placeholder="0123456789"
                className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/30 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block mb-2 text-sm text-blue-900/30"
              >
                Department:
              </label>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="CSE, ECE, etc."
                className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/30 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Event Idea */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-blue-900/30"
            >
              Your Event Idea:
            </label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Describe the idea briefly and provide specific references."
              required
              className="w-full px-3 py-2 placeholder-gray-400 bg-blue-900/30 text-white border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-blue-600/20 rounded-md hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Share your Idea
            </button>
          </div>
        </form>
      </div>
    </div>
   </ScrollAnimation>
  );
}

export default EventApplicationForm;
