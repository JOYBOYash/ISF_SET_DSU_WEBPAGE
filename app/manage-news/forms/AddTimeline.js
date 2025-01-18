"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function AddTimeline() {
  const [formData, setFormData] = useState({
    timelineno: "",
    timelinetitle: "",
    timelinedesc: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.timelineno || !formData.timelinetitle || !formData.timelinedesc) {
      setMessage({ type: "error", text: "All fields are required." });
      return false;
    }
    if (Number(formData.timelineno) <= 0) {
      setMessage({ type: "error", text: "Timeline number must be greater than zero." });
      return false;
    }
    return true;
  };

  const addTimelineEvent = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await addDoc(collection(db, "Timeline"), formData);
      setMessage({ type: "success", text: "Timeline event added successfully!" });

      setFormData({
        timelineno: "",
        timelinetitle: "",
        timelinedesc: "",
      });
    } catch (error) {
      console.error("Error adding timeline event to Firestore: ", error);
      setMessage({
        type: "error",
        text: "Failed to add timeline event. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-2 flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-3xl text-center text-white">Manage Timeline</h1>

      <form
        className="bg-blue-800/30 w-full max-w-md border-2 border-white p-8 rounded-lg shadow-lg"
        onSubmit={addTimelineEvent}
      >
        <h1 className="text-3xl text-center text-white mb-6">
          - Add Timeline Event -
        </h1>

        {/* Inline Message */}
        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        {/* Timeline Number */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Timeline Number:</label>
          <input
            type="number"
            name="timelineno"
            value={formData.timelineno}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Timeline Title */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Timeline Title:</label>
          <input
            type="text"
            name="timelinetitle"
            value={formData.timelinetitle}
            onChange={handleChange}
            required
            maxLength="100"
            placeholder="Enter a concise title"
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Timeline Description */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Timeline Description:</label>
          <textarea
            name="timelinedesc"
            value={formData.timelinedesc}
            onChange={handleChange}
            required
            maxLength="500"
            placeholder="Enter detailed description"
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg bg-blue-600 text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddTimeline;
