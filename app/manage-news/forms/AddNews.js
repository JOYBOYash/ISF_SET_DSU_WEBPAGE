"use client";
import React, { useState } from "react";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function AddNews() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    shortDesc: "",
    xLink: "",
    fbLink: "",
    instaLink: "",
    linkedinLink: "",
    ytLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.title || !formData.date || !formData.shortDesc) {
      setMessage({ type: "error", text: "Please fill in all required fields." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await addDoc(collection(db, "News"), formData);
      setMessage({ type: "success", text: "News added successfully!" });

      setFormData({
        title: "",
        date: "",
        shortDesc: "",
        xLink: "",
        fbLink: "",
        instaLink: "",
        linkedinLink: "",
        ytLink: "",
      });
    } catch (error) {
      console.error("Error adding news to Firestore: ", error);
      setMessage({ type: "error", text: "Failed to add news. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const SocialMediaInput = ({ Icon, name, value }) => (
    <div className="mb-6 w-full sm:w-auto">
      <Icon className="block text-gray-300 mb-2 w-8 h-8 mx-auto sm:w-10 sm:h-10" />
      <input
        type="url"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter ${name}`}
        className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  return (
    <div className="m-2 flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-2xl sm:text-3xl text-center text-white">Manage News</h1>

      <form
        className="formn bg-blue-800/30 w-[550px] border-2 border-white p-4 sm:p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-white mb-6">- Add News -</h1>

        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Short Description:</label>
          <textarea
            name="shortDesc"
            value={formData.shortDesc}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <SocialMediaInput Icon={Twitter} name="xLink" value={formData.xLink} />
          <SocialMediaInput Icon={Facebook} name="fbLink" value={formData.fbLink} />
          <SocialMediaInput Icon={Instagram} name="instaLink" value={formData.instaLink} />
          <SocialMediaInput Icon={Linkedin} name="linkedinLink" value={formData.linkedinLink} />
          <SocialMediaInput Icon={Youtube} name="ytLink" value={formData.ytLink} />
        </div>

        <p className="text-gray-300/50 text-center text-sm mt-4">
          * Paste the post links in respective fields
        </p>

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

export default AddNews;
