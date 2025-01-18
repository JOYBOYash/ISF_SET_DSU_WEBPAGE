"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { CalendarClock } from "lucide-react";
import { CalendarOff } from "lucide-react";
import Button from "./Button";
import "@/app/globals.css";

function UEvents(props) {
  const [events, setEvents] = useState([]);

  // Fetch events from Firestore
  useEffect(() => {
    const eventsCollection = collection(db, "UpcomingEvents");
    const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
      const fetchedEvents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(fetchedEvents);
    });
    return () => unsubscribe();
  }, []);

  // Function to delete an event
  const deleteEvent = async (eventId) => {
    try {
      const eventRef = doc(db, "UpcomingEvents", eventId);
      await deleteDoc(eventRef); // Deleting the event document from Firestore
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="eventtitle text-3xl absolute font-bold text-center mb-8 text-blue-600/30">
        Upcoming Events
      </h1>
      <div
        className={
          props.adminView
            ? "cardevent flex m-12 flex-wrap justify-center gap-6"
            : "cardevent flex m-12 h overflow-x-scroll gap-6"
        }
      >
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="cards ucards m-4 bg-gray-900/30 hover:bg-gray-900/40 m-4 hover:border-blue-600 border border-gray-700 rounded-lg shadow-md transition-transform transform hover:origin-top-left hover:rotate-2 w-[300px] flex flex-col p-5"
            >
              <div className="flex items-center justify-center mb-4">
                <CalendarClock className="icon h-10 w-10 text-blue-500" />
              </div>
              <div className="flex flex-col text-left gap-3">
                <h1 className="heads text-2xl font-semibold text-white">
                  {event.eventName}
                </h1>
                <p className="cardtext text-xl text-gray-300">
                  {event.eventDescription}
                </p>
                <p className="cardtext text-xl text-gray-400">
                  <strong className="heads text-2xl">Date:</strong> <br></br> {event.eventDate}
                </p>
                <p className="cardtext text-xl text-gray-400">
                  <strong className="heads text-2xl">Rewards:</strong> <br></br> {event.Rewards}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center mt-4">
                <Button
                  text="Know More!"
                  openNewTab={true}
                  link={event.eventPoster}
                />

                {/* Admin view delete button */}
                {props.adminViewdel && (
                  <button onClick={() => deleteEvent(event.id)}>
                    <CalendarOff className="h-10 w-10 text-red-500 cursor-pointer" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UEvents;
