"use client";

import AdminNav from "../components/Admin/AdminNav";
import CouncilCard from "../components/CouncilCard";
import MembersCard from "../components/MembersCard";
import withAdminAuth from "../components/Admin/WithAdminAuth";
import AddCouncil from "./forms/AddCouncil";
import AddMembers from "./forms/AddMembers";

const ManageMembers = () => {
  return (
    <div>
      <AdminNav />
      <div className="m-2 mt-[100px] sm:m-8 mt-12 flex flex-col sm:flex-row overflow-hidden gap-8 sm:gap-36 items-center justify-center">
        {/* Add Members and Council forms */}
        <div className="w-full sm:w-auto">
          <AddMembers />
        </div>
        <div className="w-full sm:w-auto">
          <AddCouncil />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-8 px-4 sm:px-8">
        <MembersCard adminView adminViewdel />
    <div className="m-4">
    <CouncilCard adminView adminViewdel />
    </div>
      </div>
    </div>
  );
};

export default withAdminAuth(ManageMembers);
