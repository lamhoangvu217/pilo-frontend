import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  ChevronDownIcon,
  XIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import AssignPeople from "../../../../../congviec/AssignPeople";
import Checklist from "../../../../../congviec/Checklist";
function CongViecDetailModal({ closeTaskDetailModal }) {
  const [percent, setPercent] = useState(0);
  const handlePercent = (e) => {
    setPercent(e.target.value);
  };
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
            <div className="flex items-center justify-between">
              <div
                className={
                  percent === 100
                    ? "bg-[#2ecc71] flex items-center rounded-md text-white"
                    : "bg-white flex items-center border rounded-md text-black border-black"
                }
              >
                {/* <CheckIcon className="w-5 h-5 text-gray-500" /> */}
                <span className=" block text-sm px-5 py-2 border-r border-black">
                  Hoàn thành
                </span>
                <div tabIndex={0} className=" px-4 flex items-center dropdown">
                  <span className="">{percent}%</span>
                  <ChevronDownIcon className="w-4 h-4  " />
                  <div
                    tabIndex={0}
                    className="dropdown-content menu px-5 py-5 shadow bg-white mt-64 rounded-box w-64"
                  >
                    <span className="text-black block text-md font-bold">
                      Tiến độ công việc
                    </span>
                    <div className="mt-3">
                      <ProgressBar labelSize="12px" completed={percent} />
                    </div>
                    <form>
                      <div className="mt-3 flex flex-row items-center">
                        <input
                          type="text"
                          name="progress"
                          className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Nhập tiến độ (%)"
                          onChange={(e) => setPercent(e.target.value)}
                        />
                        <span className="text-black text-md ml-2">%</span>
                      </div>
                      <div className="mt-5 flex justify-center">
                        <button
                          type="submit"
                          onClick={handlePercent}
                          className="px-5 py-2 bg-[#3498db] text-sm rounded-md text-white"
                        >
                          Confirm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div onClick={closeTaskDetailModal} className="cursor-pointer">
                <XIcon className="w-5 h-5 text-black" />
              </div>
            </div>

            <hr className="mt-6 mb-3" />

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-md font-bold">
                  Tên nhóm công việc
                </span>
              </label>
              <input
                placeholder="nhập tên nhóm công việc"
                value="Xử lý frontend cho trang 1"
                className="input  bg-white text-black border-gray-300 border-2"
                type="text"
              />
            </div>
            <div className="mt-3">
              <span className="text-black text-sm">
                Người giao việc:{" "}
                <span className="font-semibold text-[#d63031]">
                  Vũ Hoàng Lâm
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 mt-3">
              <div>
                <AssignPeople />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-row items-center mb-2">
                <InformationCircleIcon className="w-4 h-4 text-black" />
                <span className="text-black block ml-1 label-text text-md font-bold">
                  Mô tả
                </span>
              </div>

              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={""}
              />
            </div>
            <div className="checklist mt-5">
              <Checklist />
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default CongViecDetailModal;
