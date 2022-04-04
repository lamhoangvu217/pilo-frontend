import React, { Fragment, useState } from "react";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import SelectDuAnForm from "./SelectDuAnForm";
import SelectNhomCongViecForm from "./SelectNhomCongViecForm";
import Checklist from "./Checklist";
import AssignPeople from "./AssignPeople";
import Deadline from "./Deadline";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

function AddCongViecModal() {
  const [selected, setSelected] = useState(people[0]);
  
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
                <AssignPeople />
              </div>
              <div>
                <Deadline />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 mb-10">
              <SelectDuAnForm
                selected={selected}
                setSelected={setSelected}
                people={people}
              />
              <SelectNhomCongViecForm
                selected={selected}
                setSelected={setSelected}
                people={people}
              />
            </div>

            <div>
              <Checklist />
            </div>
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
