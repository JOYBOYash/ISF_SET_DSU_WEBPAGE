"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { User, UserMinus } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations"

function MembersCard({ adminView = false, adminViewdel = false }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch members from Firestore
  useEffect(() => {
    const membersCollection = collection(db, "Members");
    const unsubscribe = onSnapshot(
      membersCollection,
      (snapshot) => {
        const fetchedMembers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMembers(fetchedMembers);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching members:", error);
        setError("Failed to fetch members.");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const deleteMember = async (memberId) => {
    try {
      const eventRef = doc(db, "Members", memberId);
      await deleteDoc(eventRef);
      console.log("Member deleted successfully");
    } catch (error) {
      console.error("Error deleting member:", error);
      setError("Failed to delete member.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-400">Loading members...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (members.length === 0) {
    return (
      <p className="text-center text-gray-400">No members found.</p>
    );
  }

  return (
    <ScrollAnimation  inAnimation="slideInUp" outAnimation="fadeOut">
      <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600/40">
        Forum Members
      </h1>
      <div
        className={
          adminView
            ? "flex flex-wrap justify-center gap-6"
            : "flex overflow-x-scroll gap-6"
        }
      >
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-gray-900/30 hover:bg-gray-900/40 flex flex-col hover:border-blue-600 border border-gray-700 rounded-lg shadow-md gap-2 transition-transform transform hover:scale-105 p-5"
          >
            <User className="h-10 w-10 text-blue-500" />
            <div className="flex flex-col text-left gap-3">
              <h1 className="text-2xl font-semibold text-white">
                {member.memberName}
              </h1>
              <p className="text-xl text-gray-300">
                <strong>Department:</strong> {member.memberDepartment}
              </p>
              <p className="text-xl text-gray-300">
                <strong>Registration No:</strong> {member.memberRegNo}
              </p>
              <p className="text-xl text-gray-300">
                <strong>Reference No:</strong> {member.memberRefNo}
              </p>
              <p className="text-xl text-gray-300">
                <strong>Membership ID:</strong> {member.memberMemID}
              </p>
            </div>
            {adminViewdel && (
              <button
                className="flex bg-red-500 p-2 m-2 rounded-lg items-center justify-center gap-4 hover:bg-red-600"
                onClick={() => deleteMember(member.id)}
              >
                Remove Member
                <UserMinus className="h-6 w-6 cursor-pointer" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default MembersCard;
