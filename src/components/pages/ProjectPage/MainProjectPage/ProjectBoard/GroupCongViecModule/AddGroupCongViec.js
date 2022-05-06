import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddGroupCongViecModal from "./AddGroupCongViecModal";
import ViewGroupCongViecModal from "./ViewGroupCongViecModal";
function AddGroupCongViec() {
  let [addGroupOpen, setAddGroupOpen] = useState(false);
  function closeAddGroupModal() {
    setAddGroupOpen(false);
  }

  function openAddGroupModal() {
    setAddGroupOpen(true);
  }
  let [groupOpen, setGroupOpen] = useState(false);
  function closeGroupModal() {
    setGroupOpen(false);
  }

  function openGroupModal() {
    setGroupOpen(true);
  }
  return (
    <>
      <div
        onClick={openAddGroupModal}
        className="text-violet-500 px-5 cursor-pointer  font-medium text-sm py-3"
      >
        + Thêm nhóm công việc
      </div>
      <Transition appear show={addGroupOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddGroupModal}
        >
          <AddGroupCongViecModal />
        </Dialog>
      </Transition>
    </>
  );
}

export default AddGroupCongViec;
