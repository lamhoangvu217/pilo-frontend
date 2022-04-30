import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
import Moment from "react-moment";
import projectApi from "api/projectApi";
import toast from "react-hot-toast";
import EditDuAnModal from "components/duan/EditDuAnModal";

function ProjectDetailModal() {
  const projectId = useParams();
  const { project, loading } = useProjectDetail(projectId.id);
  const [editable, setEditable] = useState(false);
  let [addDuAnOpen, setAddDuAnOpen] = useState(false);

  function closeDuAnModal() {
    setAddDuAnOpen(false);
  }

  function openDuAnModal() {
    setAddDuAnOpen(true);
  }
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-5xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
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

            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Tên dự án
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Ngày bắt đầu
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Ngày kết thúc
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Người tạo dự án
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {project.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Moment format="DD/MM/YYYY">
                              {project.start_date}
                            </Moment>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Moment format="DD/MM/YYYY">
                              {project.end_date}
                            </Moment>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {project.description}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {project.members.map((member) => {
                              if (member.role == "admin") {
                                return (
                                  <p className="text-black text-sm">
                                    {member.email}
                                  </p>
                                );
                              } else {
                                return "";
                              }
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="btn" onClick={openDuAnModal}>
                      Sửa dự án
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
      <Transition appear show={addDuAnOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDuAnModal}
        >
          <EditDuAnModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default ProjectDetailModal;
