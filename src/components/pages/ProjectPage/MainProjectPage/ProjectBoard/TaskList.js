import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddCongViecModal from "../../../../congviec/AddCongViecModal";
import useWindowSize from "../../../../../hooks/useWindowSize";
import FilterModule from "./FilterModule/FilterModule";
import TaskItem from "./TaskItem";
// import useTaskList from "hooks/useTaskList";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "redux/actions/tasks";
import { getLists } from "redux/actions/lists";
import { getTask } from "redux/actions/tasks";
// import useLists from "hooks/useLists";
import { useParams } from "react-router-dom";
function TaskList() {
  let [addJobOpen, setAddJobOpen] = useState(false);
  const projectId = useParams();
  const projectIdFormat = projectId.id;
  // const { list } = useLists(projectIdFormat);
  const [width, height] = useWindowSize();
  const [listId, setListId] = useState("");
  const [listName, setListName] = useState("");
  const projectListHeight = height - 75;
  function closeAddJobModal() {
    setAddJobOpen(false);
  }

  function openAddJobModal() {
    setAddJobOpen(true);
  }
  const handleSelect = (e) => {
    setListId(e.target.value);
    setListName(e.target.options[e.target.selectedIndex].text);
  };
  const index = 0;
  // const { taskList, loading } = useTaskList(listId);
  const tasks = useSelector((state) => state.task.tasks);
  const lists = useSelector((state) => state.list.lists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists(projectIdFormat));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTasks(listId));
  }, [listId, projectIdFormat]);
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-3">
          <div
            className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg"
            style={{ height: `${projectListHeight}px` }}
          >
            <FilterModule />
            <div className="flex flex-row py-3 w-full bg-white items-center space-x-2">
              <span className="text-black block ml-3">Nhóm công việc</span>
              <div>
                <select onChange={(e) => handleSelect(e)}>
                  <option value="0" disabled selected>
                    --Chọn nhóm công việc--
                  </option>
                  {lists.map((l) => (
                    <option value={`${l.id}`}>{l.name}</option>
                  ))}
                </select>
              </div>
            </div>
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
                {tasks?.map((task) => (
                  <TaskItem
                    task={task}
                    listId={listId}
                    listName={listName}
                    index={index + 1}
                  />
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
