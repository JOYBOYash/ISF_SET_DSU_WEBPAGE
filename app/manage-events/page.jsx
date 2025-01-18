"use client";

import React from "react";
import AdminNav from "../components/Admin/AdminNav";
import UpcomingEvents from "./forms/UpcomingEvents";
import FinishedEvents from "./forms/FinishedEvents";
import FEvents from "../components/FEvents";
import UEvents from "../components/UEvents";
import WithAdminAuth from "../components/Admin/WithAdminAuth";

const ManageEvents = () => {
  return (
    <div>
      <AdminNav />
      <div className="m-2 mt-[100px] flex flex-col gap-8 p-4 items-center justify-center">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl sm:text-2xl text-center text-white mb-4 font-bold">
          Manage Events
        </h1>

        {/* Event Forms Section */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-36 items-center justify-center w-full">
          {/* Upcoming Events Form */}
          <div className="w-full max-w-xs sm:max-w-md">
            <UpcomingEvents />
          </div>

          {/* Finished Events Form */}
          <div className="w-full max-w-xs sm:max-w-md">
            <FinishedEvents />
          </div>
        </div>
      </div>

      {/* Events List Section */}
      <div className="flex flex-col gap-8 px-4 sm:px-8">
        <FEvents adminView adminViewdel />
        <UEvents adminView adminViewdel />
      </div>
    </div>
  );
};

export default WithAdminAuth(ManageEvents);
