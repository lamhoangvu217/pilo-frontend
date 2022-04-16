import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddCongViecModal from "../../../congviec/AddCongViecModal";
import AddDuAnModal from "../../../duan/AddDuAnModal";
import { ChevronDownIcon } from "@heroicons/react/solid";
function AddModule() {
  let [addJobOpen, setAddJobOpen] = useState(false);
  let [addDuAnOpen, setAddDuAnOpen] = useState(false);
  function closeAddJobModal() {
    setAddJobOpen(false);
  }

  function openAddJobModal() {
    setAddJobOpen(true);
  }

  function closeDuAnModal() {
    setAddDuAnOpen(false);
  }

  function openDuAnModal() {
    setAddDuAnOpen(true);
  }
  return (
    <div>
      <div className="dropdown dropdown-end ">
        <div
          tabIndex={0}
          className="m-1 flex flex-row justify-between border-2 px-5 py-2 rounded-3xl border-none bg-violet-500  "
        >
          <span className="text-white text-sm">Thêm công việc</span>
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </div>

        <ul
          tabIndex={0}
          className="p-2 shadow menu rounded-lg mt-2 dropdown-content bg-white w-52"
        >
          <li className="text-black" onClick={openAddJobModal}>
            <span>Thêm công việc</span>
          </li>
          <li className="text-black" onClick={openDuAnModal}>
            <span>Thêm dự án</span>
          </li>
        </ul>
      </div>
      <Transition appear show={addJobOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddJobModal}
        >
          <AddCongViecModal />
        </Dialog>
      </Transition>
      <Transition appear show={addDuAnOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDuAnModal}
        >
          <AddDuAnModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddModule;
