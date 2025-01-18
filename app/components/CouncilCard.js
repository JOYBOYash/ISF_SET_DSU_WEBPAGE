"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Briefcase, Trash2, LinkedinIcon } from "lucide-react";

function CouncilCard(props) {
  const [councilMembers, setCouncilMembers] = useState([]);

  // Fetch council members from Firestore
  useEffect(() => {
    const councilCollection = collection(db, "Council");
    const unsubscribe = onSnapshot(councilCollection, (snapshot) => {
      const fetchedCouncil = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCouncilMembers(fetchedCouncil);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const deleteCouncilMember = async (memberId) => {
    try {
      const councilRef = doc(db, "Council", memberId);
      await deleteDoc(councilRef);
      console.log("Council member deleted successfully");
    } catch (error) {
      console.error("Error deleting council member:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-600/40">
        Council Members
      </h1>
      <div
        className={
          props.adminView
            ? "flex flex-wrap justify-center gap-8"
            : "flex overflow-x-scroll gap-8"
        }
      >
        {councilMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gradient-to-r from-blue-900/10 via-blue-800/30 to-blue-700/60 gap-2 hover:bg-gradient-to-r hover:from-blue-700/60 hover:to-blue-800/30 border transition ease-in-out border-gray-900/10 rounded-2xl shadow-lg p-6 w-72 transform transition-all hover:scale-105 hover:shadow-xl relative"
          >
            <div className="absolute top-4 right-4">
              <Briefcase className="h-16 w-16 text-blue-500" />
            </div>
            <div className="flex flex-col text-left gap-4 mt-12">
              <h2 className="text-2xl font-semibold text-white">
                {member.personName}
              </h2>
              <p className="text-xl text-gray-300">
                <strong>Title:</strong> {member.title}
              </p>
              <p className="text-xl text-gray-300">
                <strong>Department:</strong> {member.department}
              </p>
              <p className="flex items-center gap-2 text-xl text-gray-300">
                <strong>Contact Info:</strong>
                <a
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all"
                  href={member.contactInfo}
                >
                  <LinkedinIcon className="h-6 w-6 text-white" />
                </a>
              </p>
            </div>
            {props.adminViewdel && (
              <button
                className="absolute bottom-4 right-4 bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-all"
                onClick={() => deleteCouncilMember(member.id)}
              >
                <Trash2 className="h-6 w-6 inline-block" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouncilCard;
