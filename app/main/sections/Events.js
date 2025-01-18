import Button from "@/app/components/Button";
import UEvents from "@/app/components/UEvents";
import FEvents from "@/app/components/FEvents";
import React from "react";
import "./sections.css"


const Events = () => {
  // const events = [
  //   {
  //     id: 1,
  //     poster: "../eventex.jpg",
  //     title: "Event 1",
  //     description: "This is a short description for event 1.",
  //     link: "#",
  //   },
  //   {
  //     id: 2,
  //     poster: "../eventex.jpg",
  //     title: "Event 2",
  //     description: "This is a short description for event 2.",
  //     link: "#",
  //   },
  //   {
  //     id: 3,
  //     poster: "../eventex.jpg",
  //     title: "Event 3",
  //     description: "This is a short description for event 3.",
  //     link: "#",
  //   },
  //   {
  //     id: 4,
  //     poster: "../eventex.jpg",
  //     title: "Event 4",
  //     description: "This is a short description for event 4.",
  //     link: "#",
  //   },
  //   {
  //     id: 5,
  //     poster: "../eventex.jpg",
  //     title: "Event 5",
  //     description: "This is a short description for event 5.",
  //     link: "#",
  //   },
  // ];

  return (
    <div className="home-about m-[100px] flex flex-col about py-10 overflow-hidden relative">
      <h1 className="text-4xl font-bold text-left mb-6">ISF Events</h1>
      <div className="p-4 flex flex-wrap gap-4 items-centre h-auto justify-center">
        <div className="eventsdiv items-center relative h-auto w-full">
          {/* <div className="flex gap-8 hover:paused whitespace-nowrap p-8">
            {events.map((event) => (
              <UEvents
                key={event.id}
                poster={event.poster}
                title={event.title}
                description={event.description}
                link={event.link}
              />
            ))}
          </div> */}
          <div className="mainevent flex w-full h-[700px] overflow-y-hidden overflow-x-hidden ">
            {" "}
            <FEvents />{" "}
          </div>

          <div className="mainevent flex w-full h-[700px] overflow-y-hidden overflow-x-hidden ">
            {" "}
            <UEvents />{" "}
          </div>
        </div>
        <Button text="View All Events" link="/main-events" styleNav="false" />
      </div>
    </div>
  );
};

export default Events;
