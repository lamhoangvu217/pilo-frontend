import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CongViecDetailModal from "./CongViecDetail/CongViecDetailModal";
function TaskItem({ person }) {
  let [taskDetailOpen, setTaskDetailOpen] = useState(false);
  function openTaskDetailModal() {
    setTaskDetailOpen(true);
    console.log("pass");
  }
  function closeTaskDetailModal() {
    setTaskDetailOpen(false);
    
  }
  return (
    <>
      <tr
        key={person.stt}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={openTaskDetailModal}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {person.stt}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {person.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {person.group_task}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {person.status_task}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {person.date}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {person.assign}
        </td>
      </tr>
      <Transition appear show={taskDetailOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeTaskDetailModal}
        >
          <CongViecDetailModal closeTaskDetailModal={closeTaskDetailModal} />
        </Dialog>
      </Transition>
    </>
  );
}

export default TaskItem;
