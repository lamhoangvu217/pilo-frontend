import React from "react";
import { HomeIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import MainBoxProject from "../../Dashboard/MainBoxProject";
import ProfileModal from "../../Dashboard/ProfileModal";
import Notification from "../../Dashboard/Notification";
import AddModule from "../../Dashboard/NavbarModule/AddModule";
function ProjectPageHeader() {
  return (
    <div className="sticky  top-0 z-10 w-full flex-shrink-0 flex h-14 bg-white shadow">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row w-full items-center ">
          {/* home link */}
          <div className="px-5">
            <Link to="/dashboard">
              <HomeIcon className="w-7 text-gray-600 h-7" />
            </Link>
          </div>
          {/* current project  */}
          <div className="dropdown border-l-2 border-gray-300">
            <div
              tabIndex={0}
              className="flex flex-row items-center cursor-pointer pl-6 justify-center"
            >
              <img src="/images/flag.png" className="w-6 h-6" alt="" />
              <span className="text-black ml-2 font-medium text-sm">
                Dự án 1
              </span>
            </div>
            <div
              tabIndex={0}
              className="p-2 mt-4 shadow menu dropdown-content bg-white rounded-md w-72"
            >
              <MainBoxProject />
            </div>
          </div>
        </div>

        <div className="flex items-center w-full mr-3 justify-end">
          <AddModule />
          <Notification />
          <ProfileModal />
        </div>
      </div>
    </div>
  );
}

export default ProjectPageHeader;
