"use client";
import React, { useEffect, useState } from "react";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function CouncilAdmin() {
  const [council, setCouncil] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [personName, setPersonName] = useState("");
  const [department, setDepartment] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  // Fetch council data from Firestore
  useEffect(() => {
    const councilCollection = collection(db, "Council");
    const unsubscribe = onSnapshot(councilCollection, (snapshot) => {
      const fetchedCouncil = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCouncil(fetchedCouncil);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle form submission for both adding and updating
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine if it's a new title or an update
    const titleToSave = newTitle || selectedTitle;

    if (!titleToSave) {
      alert("Please provide or select a title.");
      return;
    }

    try {
      const councilRef = doc(db, "Council", titleToSave);
      await setDoc(councilRef, {
        title: titleToSave,
        personName,
        department,
        contactInfo,
      });

      // Reset form fields
      setSelectedTitle("");
      setNewTitle("");
      setPersonName("");
      setDepartment("");
      setContactInfo("");

      alert("Council member saved successfully!");
    } catch (error) {
      console.error("Error saving council member:", error);
      alert("Failed to save council member.");
    }
  };

  return (
    <div>
      <form
        className="overflow-hidden bg-blue-800/30 w-full sm:w-[550px] h-auto border-2 border-white p-4 sm:p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-white mb-6">
          - Manage Council -
        </h1>
        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-300 mb-2">Select Existing Title:</label>
          <select
            value={selectedTitle}
            onChange={(e) => {
              setSelectedTitle(e.target.value);
              setNewTitle(""); // Clear new title if existing one is selected
            }}
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a title (or add a new one below)</option>
            {council.map((role) => (
              <option key={role.id} value={role.id}>
                {role.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-300 mb-2">New Title (Optional):</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
              setSelectedTitle(""); // Clear selected title if new one is entered
            }}
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-300 mb-2">Person Name:</label>
          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="mb-4 sm:mb-6 w-full sm:w-auto">
            <label className="block text-gray-300 mb-2">Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 sm:mb-6 w-full sm:w-auto">
            <label className="block text-gray-300 mb-2">Contact Info:</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Council Member
        </button>
      </form>
    </div>
  );
}

export default CouncilAdmin;
