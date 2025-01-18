"use client";
import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function UpcomingEvents() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventPoster, setEventPoster] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [Rewards, setRewards] = useState("");

  const AddUpcomingEvents = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "UpcomingEvents"), {
        eventName,
        eventDescription,
        eventPoster,
        eventDate,
        Rewards,
      });
      // Reset form inputs
      setEventName("");
      setEventDescription("");
      setEventPoster("");
      setEventDate("");
      setRewards("");
      alert("Event added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form
        className="bg-blue-800/30 border-2 border-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-full sm:max-w-[550px]"
        onSubmit={AddUpcomingEvents}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-white mb-6 font-bold">
          - Add an Upcoming Event -
        </h1>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Event Description:</label>
          <textarea
            name="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Event Poster (URL):</label>
          <input
            type="url"
            name="eventPoster"
            placeholder="URL of the poster"
            value={eventPoster}
            onChange={(e) => setEventPoster(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Rewards:</label>
          <input
            type="text"
            value={Rewards}
            onChange={(e) => setRewards(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpcomingEvents;
