import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
import Moment from "react-moment";
import projectApi from "api/projectApi";
import toast from "react-hot-toast";
function ProjectDetailModal() {
  const projectId = useParams();
  const { project, loading } = useProjectDetail(projectId.id);
  const [editable, setEditable] = useState(false);
  const enableEditable = () => {
    setEditable(true);
  };
  const turnoffEditable = () => {
    setEditable(false);
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-xl text-black font-bold">Thông tin dự án</h1>
              <img
                src={`${project.thumbnail}`}
                className="w-9 h-9 rounded-full"
                alt=""
              />
            </div>

            <hr className="mt-3 mb-3" />
            <div>
              <div className="flex flex-row">
                <span className="text-black text-sm">Tên dự án:</span>
                <span className="text-black text-sm">{project.name}</span>
              </div>
              <div>
                <div>
                  <span className="text-black text-sm">Ngày bắt đầu:</span>
                  <span className="text-black text-sm">
                    <Moment format="DD/MM/YYYY">{project.start_date}</Moment>
                  </span>
                </div>
                <div>
                  <span className="text-black text-sm">Ngày kết thúc:</span>
                  <span className="text-black text-sm">
                    <Moment format="DD/MM/YYYY">{project.end_date}</Moment>
                  </span>
                </div>
              </div>
              <div>
                <span className="text-black text-sm">Description:</span>
                <p className="text-black text-sm">{project.description}</p>
              </div>
              <div>
                {editable ? (
                  <div className="flex flex-row justify-around">
                    <button className="btn">Save</button>
                    <button className="btn">Xóa dự án</button>
                    <button onClick={turnoffEditable} className="btn">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button onClick={enableEditable} className="btn">
                    Sửa dự án
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default ProjectDetailModal;
