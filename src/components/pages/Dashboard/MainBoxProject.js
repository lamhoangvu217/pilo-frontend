import projectApi from "api/projectApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
// import useProjectList from "hooks/useProjectList";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "redux/actions/project";
function MainBoxProject() {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div className="w-full">
      {/* <input
        type="text"
        name="phongban"
        id="phongban"
        // onChange={(e) => setProjectInput(e.target.value)}
        className="shadow-sm text-black border-t-0 border-x-0 focus:ring-0  block w-full sm:text-sm border-gray-300"
        placeholder="Tìm kiếm dự án"
      /> */}
      <hr />
      <div className="mainbox_list w-full flex flex-col items-center justify-center">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`}>
            <div
              key={project.id}
              className=" w-56 py-3 px-4  border-0 flex flex-row items-center bg-violet-600 hover:bg-violet-700 rounded-xl cursor-pointer justify-start mt-3"
            >
              <img
                src={project.thumbnail}
                className="w-8 h-8 rounded-2xl border-2 border-white"
                alt=""
              />
              <span className="text-white truncate text-md block font-medium ml-3">
                {project.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainBoxProject;
