"use client";
import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function FinishedEvents() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [Rewards, setRewards] = useState("");
  const [winnersNames, setWinnersNames] = useState("");
  const [eventPics, setEventPics] = useState("");

  const AddFinishedEvents = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "FinishedEvents"), {
        eventName,
        eventDescription,
        eventPics,
        eventDate,
        Rewards,
        winnersNames,
      });
      setEventName("");
      setEventDescription("");
      setEventDate("");
      setRewards("");
      setWinnersNames("");
      setEventPics("");
      alert("Event added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form
        className="bg-blue-800/30 border-2 border-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-full sm:max-w-[550px] h-auto"
        onSubmit={AddFinishedEvents}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-white mb-6 font-bold">
          - Add a Finished Event -
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4">
          <div className="w-full">
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
          <div className="w-full">
            <label className="block text-gray-300 mb-2">Event Date:</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Event Description:</label>
          <textarea
            name="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Event Picture:</label>
          <input
            type="text"
            name="eventPics"
            placeholder="URL of pic"
            onChange={(e) => setEventPics(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Rewards:</label>
          <input
            type="text"
            value={Rewards}
            onChange={(e) => setRewards(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Winners Names & Dept:</label>
          <input
            type="text"
            value={winnersNames}
            placeholder="Name1 (Dept1), Name2 (Dept2)"
            onChange={(e) => setWinnersNames(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 p-3 rounded-lg bg-blue-600 text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FinishedEvents;
