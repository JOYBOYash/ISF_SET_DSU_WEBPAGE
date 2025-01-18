import TimelineCards from "@/app/components/TimelineCards";
import React from "react";

const Highlights = () => {
  return (
    <section className=" text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Highlights Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Highlights</h1>
          <p className="text-lg text-gray-300">
            Explore the significant milestones and events that define our
            journey and mission.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="border-l-4 border-blue-900/10 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {/* Event 1 */}
            <TimelineCards />

            {/* Event 3 */}

            {/* Event 4 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
