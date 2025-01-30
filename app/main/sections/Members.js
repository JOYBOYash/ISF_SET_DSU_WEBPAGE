import React from "react";
import { MilestoneIcon } from "lucide-react";
import Button from "@/app/components/Button";
import ScrollAnimation from "@/app/components/ScrollAnimations";

function Members() {
  return (
    <section
      style={{
        backgroundImage: "url('../vectors.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
      }}
      className="members home-about m-[100px] py-10"
    >
      <h1 className="memtitle text-4xl font-bold text-left mb-6">Membership Perks</h1>
      <div className="card flex backdrop-blur-sm max-w-4xl mx-auto p-6 shadow-md gap-6 rounded-lg">
        <div className="text-left gap-6 flex flex-col">
          <div className="perks flex flex-col gap-14">
            <ScrollAnimation inAnimation="slideInUp" outAnimation="fadeOut" delay={0.2}>
            <div className="flex perk backdrop-blur-lg items-center w-80 h-[40] p-4 bg-blue-600/5 border-b-2 hover:bg-blue-600/80 transition ease-in-out hover:scale-105 rounded-md gap-4">
              <MilestoneIcon className="h-8 w-8" />
              <p className="text-xl perktext">
                A Unique Id card will be provided for the student from IETE.
              </p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation inAnimation="slideInUp" outAnimation="fadeOut" delay={0.4}>
            <div className="flex perk backdrop-blur-lg items-center w-80 h-[40] ml-[500px] p-4 bg-blue-600/5 border-b-2 hover:bg-blue-600/80 transition ease-in-out hover:scale-105 rounded-md gap-4">
              <MilestoneIcon className="h-8 w-8" />
              <p className="text-xl perktext">
                Exclusive Access to IETE Research papers and vast community.
              </p>
            </div>
            </ScrollAnimation>
          </div>

          <div className="perks flex flex-col gap-14">
        <ScrollAnimation inAnimation="slideInUp" outAnimation="fadeOut" delay={0.6}>
        <div className="flex perk backdrop-blur-lg items-center w-80   h-[</div>40] p-4 bg-blue-600/5 border-b-2 hover:bg-blue-600/80 transition ease-in-out hover:scale-105 rounded-md gap-4">
              <MilestoneIcon className="h-8 w-8" />
              <p className="text-xl perktext">
                Keen support in student research and journal publishing needs.
              </p>
            </div>
        </ScrollAnimation>
            <ScrollAnimation inAnimation="slideInUp" outANimation="fadeOut" delay={0.8}>
            <div className="perk flex backdrop-blur-lg items-center w-80 ml-[500px]  h-[40] p-4 bg-blue-600/5 border-b-2 hover:bg-blue-600/80 transition ease-in-out hover:scale-105 rounded-md gap-4">
              <MilestoneIcon className="h-8 w-8" />
              <p className="text-xl perktext">
                ISF members after passing out, are invited to become corporate
                member of IETE.
              </p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <Button text="See Members" link="/main-members" />
      </div>
    </section>
  );
}

export default Members;
