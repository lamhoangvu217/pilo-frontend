import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CongViecDetailModal from "./CongViecDetail/CongViecDetailModal";
import Moment from "react-moment";
function TaskItem({ task, loading, index }) {
  let [taskDetailOpen, setTaskDetailOpen] = useState(false);

  function openTaskDetailModal() {
    setTaskDetailOpen(true);
  }
  function closeTaskDetailModal() {
    setTaskDetailOpen(false);
  }
  if (loading) {
    return "";
  }
  return (
    <>
      <tr
        key={task.id}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={openTaskDetailModal}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {index}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {task.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.group_task} */} can thuc hien
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.status_task} */} chua xong
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Moment format="DD/MM/YYYY">{task.duedate}</Moment>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.assign} */} chua them nguoi
        </td>
      </tr>
      <Transition appear show={taskDetailOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeTaskDetailModal}
        >
          <CongViecDetailModal
            taskId={task.id}
            closeTaskDetailModal={closeTaskDetailModal}
          />
        </Dialog>
      </Transition>
    </>
  );
}

export default TaskItem;
