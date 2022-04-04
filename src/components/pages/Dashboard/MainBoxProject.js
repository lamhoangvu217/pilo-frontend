import projectApi from "api/projectApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function MainBoxProject() {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { projects } = await projectApi.getAll();
        setProjectList(projects.data);
        console.log(projects.data);
      } catch (error) {
        console.log("Faild to fetch project list");
      }
      // setLoading(false)
    })();
  }, []);
  // const searchProject = () => {

  // }
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
        {projectList.map((project) => (
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
        )) || <Skeleton />}
      </div>
    </div>
  );
}

export default MainBoxProject;
