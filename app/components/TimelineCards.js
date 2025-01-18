"use client";

import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Link2Off } from "lucide-react";

function TimelineCards({ adminView }) {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Real-time listener for fetching timeline data
    const unsubscribe = onSnapshot(collection(db, "Timeline"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTimelineData(data);
    });

    return () => unsubscribe();
  }, []);

  const deleteTimeline = async (timelineId) => {
    try {
      const eventRef = doc(db, "Timeline", timelineId);
      await deleteDoc(eventRef); // Deleting the timeline event document from Firestore
      console.log("Timeline event deleted successfully");
    } catch (error) {
      console.error("Error deleting timeline event:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center p-4 m-6 py-10">
      {timelineData.map((item, index) => (
        <div
          key={item.id}
          className={`timeline flex items-center m-2 w-full p-2 ${
            index % 2 === 0
              ? "flex-col-reverse lg:flex-row lg:ml-[300px]"
              : "flex-col-reverse lg:flex-row-reverse lg:mr-[300px]"
          }`}
        >
          {/* Timeline Card */}
          <div
            className={`tcard flex flex-col p-4 bg-blue-900 border-b-2 border-white/20 rounded-lg w-full lg:w-[300px] shadow-md ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-lg font-bold truncate">{item.timelinetitle}</h3>
            <p className="text-white/30 break-words line-clamp-3">
              {item.timelinedesc}
            </p>
            {adminView && (
              <button onClick={() => deleteTimeline(item.id)} className="mt-2">
                <Link2Off className="h-6 w-6 text-red-500 cursor-pointer" />
              </button>
            )}
          </div>

          {/* Timeline Marker */}
          <div className="relative bg-blue-900 text-white rounded-full p-4 w-10 h-10 flex items-center justify-center transform lg:translate-x-0 z-10 shadow-md">
            <span className="text-xl font-bold">{item.timelineno}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineCards;
