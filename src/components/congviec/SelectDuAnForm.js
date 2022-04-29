import React, { Fragment } from "react";
import useProjectList from "hooks/useProjectList";
function SelectDuAnForm() {
  const { projectList, loading } = useProjectList();
  if (loading) {
    return "";
  }
  return (
    <div>
      <span className="label-text text-black text-md font-bold">
        Chọn dự án
      </span>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        {projectList.map((project, index) => (
          <option key={index}>{project.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectDuAnForm;
