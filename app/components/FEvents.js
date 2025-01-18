"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { CalendarCheck2 } from "lucide-react";
import { CalendarOff } from "lucide-react";
import Button from "./Button";

function FEvents(props) {
  const [events, setEvents] = useState([]);

  // Fetch events from Firestore
  useEffect(() => {
    const eventsCollection = collection(db, "FinishedEvents");
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
      const eventRef = doc(db, "FinishedEvents", eventId);
      await deleteDoc(eventRef); // Delete the event document from Firestore
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="eventtitle text-3xl absolute font-bold text-center mb-8 text-blue-600/30">
        Finished Events
      </h1>
      <div
        className={
          props.adminView
            ? "cardevent flex flex-wrap m-12 justify-center gap-6"
            : "cardevent flex m-12 overflow-x-scroll gap-6"
        }
      >
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="cards ucards m-4 bg-gray-900/30 hover:bg-gray-900/40 hover:border-blue-600 border border-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 w-[300px] flex flex-col p-5"
            >
              <div className="icdiv flex items-center justify-center h-auto mb-4">
                <CalendarCheck2 className="icon h-10 w-10 text-blue-500" />
              </div>

              {/* Organized layout */}
              <div className="partseve flex flex-col text-left gap-6">
                <div className="flex flex-col">
                  <h1 className="heads text-2xl font-semibold text-white mb-2">
                    {event.eventName}
                  </h1>
                  <p className="cardtext text-lg text-gray-300">
                    {event.eventDescription}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="heads text-xl text-gray-400 font-semibold mb-1">
                    Date:
                  </p>
                  <p className="cardtext text-lg text-gray-300">
                    {event.eventDate}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="heads text-xl text-gray-400 font-semibold mb-1">
                    Rewards:
                  </p>
                  <p className="cardtext text-lg text-gray-300">
                    {event.Rewards}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="heads text-xl text-gray-400 font-semibold mb-1">
                    Winners:
                  </p>
                  <p className="cardtext wint text-lg text-gray-300">
                    {event.winnersNames}
                  </p>
                </div>
              </div>

              <div className="btndiv flex items-center gap-2 justify-center mt-4">
                <Button
                  text="Know More!"

                  openNewTab={true}
                  link={event.eventPics}
                />

                {/* Admin view delete button */}
                {props.adminViewdel && (
                  <div className="mt-4">
                    <button onClick={() => deleteEvent(event.id)}>
                      <CalendarOff className="h-10 w-10 text-red-500 cursor-pointer" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FEvents;
