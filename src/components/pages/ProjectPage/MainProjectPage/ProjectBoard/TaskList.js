import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddCongViecModal from "../../../../congviec/AddCongViecModal";
import useWindowSize from "../../../../../hooks/useWindowSize";
import FilterModule from "./FilterModule/FilterModule";
import TaskItem from "./TaskItem";

const people = [
  {
    stt: "1",
    name: "Xử lý frontend cho trang 1",
    group_task: "Cần thực hiện",
    status_task: "Chưa hoàn thành",
    date: "21-12-2022",
    assign: "Lâm Vũ Hoàng",
  },
  {
    stt: "2",
    name: "Xử lý frontend cho trang 1",
    group_task: "Cần thực hiện",
    status_task: "Chưa hoàn thành",
    date: "21-12-2022",
    assign: "Lâm Vũ Hoàng",
  },
  {
    stt: "3",
    name: "Xử lý frontend cho trang 1",
    group_task: "Cần thực hiện",
    status_task: "Chưa hoàn thành",
    date: "21-12-2022",
    assign: "Lâm Vũ Hoàng",
  },
  {
    stt: "3",
    name: "Xử lý frontend cho trang 1",
    group_task: "Cần thực hiện",
    status_task: "Chưa hoàn thành",
    date: "21-12-2022",
    assign: "Lâm Vũ Hoàng",
  },
];
function TaskList() {
  let [addJobOpen, setAddJobOpen] = useState(false);
  const [width, height] = useWindowSize();
  const projectListHeight = height - 75;
  function closeAddJobModal() {
    setAddJobOpen(false);
  }

  function openAddJobModal() {
    setAddJobOpen(true);
  }

  
  return (
    <div className="flex flex-col">
      <div className="   ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-3">
          <div
            className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg"
            style={{ height: `${projectListHeight}px` }}
          >
            <FilterModule />
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 sticky top-0">
                <tr className="bg-white border-b">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tên công việc
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nhóm công việc
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tình trạng công việc
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hạn hoàn thành
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Người thực hiện
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <TaskItem person={person} />
                ))}
                <tr>
                  <td></td>
                  <td
                    onClick={openAddJobModal}
                    className="text-teal-500 font-medium text-sm cursor-pointer px-5 py-4"
                  >
                    + Thêm công việc
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
      
    </div>
  );
}

export default TaskList;
