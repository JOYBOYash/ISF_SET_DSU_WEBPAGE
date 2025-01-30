"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/config/firebase";

function AddMembers() {
  const [memberName, setMemberName] = useState("");
  const [memberDepartment, setMemberDepartment] = useState("");
  const [memberRegNo, setMemberRegNo] = useState("");
  const [memberRefNo, setMemberRefNo] = useState("");
  const [memberMemID, setMemberMemID] = useState("");

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Members"),
      
      {
        memberName,
        memberDepartment,
        memberRegNo,
        memberRefNo,
        memberMemID,
      });

      // Reset form fields
      setMemberName("");
      setMemberDepartment("");
      setMemberRegNo("");
      setMemberRefNo("");
      setMemberMemID("");

      setMessage({ type: "success", text: "Member added successfully!" });
    }  catch (error) {
      console.error("Error adding Member to Firestore: ", error);
      setMessage({ type: "error", text: "Failed to add member. Please try again." });
    } 
  };

  return (
    <div>
      <form
        className="overflow-hidden bg-blue-800/30 w-full sm:w-[550px] max-w-full h-auto border-2 p-4 sm:p-8 rounded-lg shadow-lg"
        onSubmit={handleAddMember}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-white mb-6">
          - Add a Member -
        </h1>

        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-300 mb-2">Name:</label>
          <input
            type="text"
            name="memberName"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="mb-4 sm:mb-6 w-full">
            <label className="block text-gray-300 mb-2">Department:</label>
            <input
              type="text"
              name="memberDepartment"
              value={memberDepartment}
              onChange={(e) => setMemberDepartment(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 sm:mb-6 w-full">
            <label className="block text-gray-300 mb-2">
              Registration Number:
            </label>
            <input
              type="text"
              name="memberRegNo"
              value={memberRegNo}
              onChange={(e) => setMemberRegNo(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="mb-4 sm:mb-6 w-full">
            <label className="block text-gray-300 mb-2">
              Reference Number:
            </label>
            <input
              type="text"
              name="memberRefNo"
              value={memberRefNo}
              onChange={(e) => setMemberRefNo(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 sm:mb-6 w-full">
            <label className="block text-gray-300 mb-2">Membership ID:</label>
            <input
              type="text"
              name="memberMemID"
              value={memberMemID}
              onChange={(e) => setMemberMemID(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-blue-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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

export default AddMembers;
