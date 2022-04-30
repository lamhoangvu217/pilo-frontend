import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Checklist from "./Checklist";
import AssignPeople from "./AssignPeople";
import useProjectList from "hooks/useProjectList";
import useLists from "hooks/useLists";
function AddCongViecModal() {
  const { projectList, loading } = useProjectList();

  const [selectProject, setSelectProject] = useState("");
  const [selectGroup, setSelectGroup] = useState("");
  const [listing, setListing] = useState("");

  const handleProjectChange = (selectedProject) => {
    setSelectProject(selectedProject);
    setListing(selectedProject);
  };
  const { list } = useLists(listing);
  const handleGroupChange = (selectedGroup) => {
    setSelectGroup(selectedGroup);
    console.log(selectedGroup);
  };
  if (loading) {
    return "";
  }
  return (
    <div className="min-h-screen px-4  text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-xl  text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <h1 className="text-xl text-black font-bold">Thêm mới công việc</h1>
            <hr className="mt-3 mb-3" />

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-md font-bold">
                  Tên công việc
                </span>
              </label>
              <input
                placeholder="nhập tên công việc"
                className="input  bg-white text-black border-gray-300 border-2"
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-7">
              <div>
                <span className="label-text text-black text-md font-bold">
                  Chọn dự án
                </span>
                <select
                  id="project"
                  name="project"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={(e) => handleProjectChange(e.target.value)}
                >
                  <option>--Chọn dự án--</option>
                  {projectList.map((project, index) => (
                    <option value={`${project.id}`} key={index}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="label-text text-black font-semibold block">
                    Hạn hoàn thành
                  </span>
                  <input
                    className=" bg-[#2ecc71] font-medium mt-2  text-white rounded-lg focus:border-0 border-0"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 mb-10">
              <AssignPeople />

              <div>
                <span className="label-text text-black text-md font-bold">
                  Chọn nhóm công việc
                </span>
                <select
                  id="location"
                  name="location"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={(e) => handleGroupChange(e.target.value)}
                >
                  <option>--Chọn nhóm công việc</option>
                  {list.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* <div>
              <Checklist />
            </div> */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-black text-md font-bold">
                  Mô tả công việc
                </span>
              </label>
              <textarea
                className="textarea h-24 textarea-bordered bg-white text-black border-gray-300 border-2"
                placeholder="nhập mô tả công viêc"
                defaultValue={""}
              />
            </div>
            <button class="btn btn-primary mt-5 w-full mb-1">Thêm</button>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddCongViecModal;
