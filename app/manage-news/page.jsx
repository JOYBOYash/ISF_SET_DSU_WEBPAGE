"use client";
import React from "react";
import AdminNav from "../components/Admin/AdminNav";
import NewsCard from "../components/NewsCard";
import withAdminAuth from "../components/Admin/WithAdminAuth";
import AddNews from "./forms/AddNews";
import AddTimeline from "./forms/AddTimeline";
import TimelineCards from "@/app/components/TimelineCards";

const ManageNewsPage = () => {
  return (
    <div className="h-auto text-white">
      <AdminNav />
      <div className="flex mt-[100px] flex-col items-center justify-center p-4">
        {/* ADD NEWS AND TIMELINE */}
        <div className="flex flex-wrap gap-6 sm:gap-12 items-center justify-center">
          <div className="w-100vw m-12 p-4 sm:w-auto flex-shrink-0">
            <AddNews />
          </div>
          <div className="w-100vw m-12 p-4 sm:w-auto flex-shrink-0">
            <AddTimeline />
          </div>
        </div>

        {/* NEWS CARDS */}
        <div className="w-full max-w-6xl p-4 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            News Management
          </h2>
          <div className="grid grid-cols-1 gap-4 items-center justify-center sm:grid-cols-2 lg:grid-cols-3">
            <NewsCard adminView adminViewdel />
          </div>
        </div>

        {/* TIMELINE CARDS */}
        <div className="w-full flex flex-col items-center max-w-6xl p-4 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Timeline Management
          </h2>
          <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TimelineCards adminView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAdminAuth(ManageNewsPage);
