"use client";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Chart } from "react-google-charts";
import AdminNav from "../components/Admin/AdminNav";
import withAdminAuth from "../components/Admin/WithAdminAuth";
import UEvents from "../components/UEvents";
import FEvents from "../components/FEvents";
import MembersCard from "../components/MembersCard";
import CouncilCard from "../components/CouncilCard";
import NewsCard from "../components/NewsCard";

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: true,
};

function Dashboard() {
  const [upcomingEventsCount, setUpcomingEventsCount] = useState(0);
  const [finishedEventsCount, setFinishedEventsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      // Fetch upcoming events count
      const upcomingEventsQuery = query(collection(db, "UpcomingEvents"));
      const upcomingSnapshot = await getDocs(upcomingEventsQuery);
      setUpcomingEventsCount(upcomingSnapshot.size);

      // Fetch finished events count
      const finishedEventsQuery = query(collection(db, "FinishedEvents"));
      const finishedSnapshot = await getDocs(finishedEventsQuery);
      setFinishedEventsCount(finishedSnapshot.size);

      // Fetch members count
      const membersQuery = query(collection(db, "Members"));
      const membersSnapshot = await getDocs(membersQuery);
      setMembersCount(membersSnapshot.size);
    };

    fetchData();
  }, []);

  // Prepare data for chart
  const membersData = [
    ["Task", "Number"],
    ["Upcoming Events", upcomingEventsCount],
    ["Finished Events", finishedEventsCount],
    ["Members Count", membersCount],
  ];

  return (
    <div>
      <AdminNav />
      <div
        className="flex flex-col gap-6 mt-[50px] transition ease-in-out items-center justify-center px-4 py-8"
        style={{ textAlign: "center" }}
      >
        <h1 className="text-4xl md:text-5xl p-4 font-bold">Welcome, Admin!</h1>
        <h2 className="text-2xl md:text-3xl items-center p-4">- Form Statistics -</h2>

        {/* Chart Section */}
        <div
          className="flex flex-col items-center w-full max-w-lg sm:max-w-xl gap-6 rounded-lg border-white/70 shadow-md shadow-white border-2 bg-white/50 justify-center p-6"
          style={{ color: "white" }}
        >
          <Chart
            chartType="PieChart"
            data={membersData}
            options={{
              is3D: true,
              backgroundColor: "transparent",
              animation: {
                duration: 1000,
                easing: "in-out",
                startup: true,
              },
              colors: ["#082e5e", "#344CB7", "blue"],
            }}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>

      {/* Responsive Components */}
      <div className="flex flex-col gap-6 px-4">
        <UEvents />
        <FEvents />
        <MembersCard />
        <CouncilCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default withAdminAuth(Dashboard);
