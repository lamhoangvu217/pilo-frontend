import React, { Fragment, useState, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  ChevronDownIcon,
  XIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import AssignPeople from "../../../../../congviec/AssignPeople";
import Checklist from "../../../../../congviec/Checklist";
import { getTask } from "redux/actions/tasks";
import useTaskDetail from "hooks/useTaskDetail";
import useProjectDetail from "hooks/useProjectDetail";
import taskApi from "api/taskApi";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import Moment from "react-moment";
import { addTaskMember, deleteTask, getTasks } from "redux/actions/tasks";
import { editTaskDescription } from "redux/actions/tasks";
const schema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  duedate: yup.date(),
  progress: yup.number(),
});
function CongViecDetailModal({
  taskId,
  closeTaskDetailModal,
  taskDetailOpen,
  setTaskDetailOpen,
  listId,
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const [add, setAdd] = useState(true);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const [editMode, setEditMode] = useState(false);

  const task = useSelector((state) => state.task.task);
  const [newDescription, setNewDescription] = useState(task.description);
  const members = task.members.map((member) => member.user);
  useEffect(() => {
    dispatch(getTask(taskId));
    dispatch(getTasks(listId));
  }, [dispatch]);

  const isLoggedIn = !!loggedInUser.id;
  const userId = loggedInUser.id;
  const projectId = useParams();
  // const { task } = useTaskDetail(taskId);
  const { project, loading } = useProjectDetail(projectId.id);
  const handleAddMember = async (e) => {
    dispatch(
      addTaskMember({
        add: e.target.checked,
        taskId: task.id,
        userId: e.target.name,
      })
    );
  };
  const handleDelete = async () => {
    dispatch(deleteTask(listId, taskId));
    toast.success("Xóa công việc thành công!", {
      duration: 2000,
      position: "top-right",
      icon: "👏",
    });
    setTaskDetailOpen(false);
  };
  const onDescriptionSubmit = (e) => {
    e.preventDefault();
    dispatch(editTaskDescription(taskId, { newDescription }));
    setEditMode(false);
    toast.success("Cập nhật mô tả thành công!", {
      duration: 2000,
      position: "top-right",
      className: "bg-green-500 text-white",
      icon: "👏",
    });
  };
  const handleProgress = async (value) => {
    try {
      const progressData = await taskApi.updateProgress(value, taskId);
      dispatch(getTask(taskId));
      toast.success("Cập nhật tiến độ thành công!", {
        duration: 2000,
        position: "top-right",
        className: "bg-green-500 text-white",
        icon: "👏",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDescription = (e) => {
    setNewDescription(e.target.value);
    setEditMode(true);
  };
  let admin;
  if (loading) {
    admin = "";
  } else {
    admin = (
      <span className="">
        {project.members.map((member) => {
          if (member.role == "admin") {
            return (
              <p className="font-semibold text-[#d63031] text-sm">
                {member.email}
              </p>
            );
          } else {
            return "";
          }
        })}
      </span>
    );
  }
  if (loading) {
    return "";
  }
  return (
    <div className="min-h-screen px-4  text-center">
      <Toaster />
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
                  task.progress === 100
                    ? "bg-[#2ecc71] flex items-center rounded-md text-white"
                    : "bg-white flex items-center border rounded-md text-black border-black"
                }
              >
                {/* <CheckIcon className="w-5 h-5 text-gray-500" /> */}
                <span className=" block text-sm px-5 py-2 border-r border-black">
                  Hoàn thành
                </span>
                <div tabIndex={0} className=" px-4 flex items-center dropdown">
                  <span className="">{task.progress}%</span>
                  <ChevronDownIcon className="w-4 h-4  " />
                  <div
                    tabIndex={0}
                    className="dropdown-content menu px-5 py-5 shadow bg-white mt-64 rounded-box w-64"
                  >
                    <span className="text-black block text-md font-bold">
                      Tiến độ công việc
                    </span>
                    <div className="mt-3">
                      <ProgressBar labelSize="12px" completed={task.progress} />
                    </div>
                    <form onSubmit={handleSubmit(handleProgress)}>
                      <div className="mt-3 flex flex-row items-center">
                        <input
                          type="text"
                          name="progress"
                          className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Nhập tiến độ (%)"
                          {...register("progress")}
                        />
                        <span className="text-black text-md ml-2">%</span>
                      </div>
                      <div className="mt-5 flex justify-center">
                        <button
                          type="submit"
                          className="px-5 py-2 bg-[#3498db] text-sm rounded-md text-white"
                        >
                          Xác nhận
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <button onClick={handleDelete} className="btn btn-error">
                    Delete
                  </button>
                </div>
                <div onClick={closeTaskDetailModal} className="cursor-pointer">
                  <XIcon className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-3" />

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-md font-bold">
                  Tên công việc
                </span>
              </label>
              <input
                placeholder="nhập tên nhóm công việc"
                value={`${task.name}`}
                disabled
                className="input disabled:bg-gray-300 disabled:border-0 disabled:text-gray-400 bg-white text-black border-gray-300 border-2"
                type="text"
              />
            </div>
            <div className="mt-3 flex flex-row">
              <span className="text-black block mr-2 text-sm">
                Người giao việc:
              </span>
              <div>{admin}</div>
            </div>
            <div className="flex flex-row items-center mt-4">
              <span className="text-black block mr-2 text-sm">
                Hạn hoàn thành:
              </span>
              <div className="text-red-500 font-bold">
                <Moment format="DD/MM/YYYY">{task.duedate}</Moment>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-3">
              <div>
                <span className="label-text text-black text-md font-bold">
                  Người thực hiện
                </span>
                {project.members?.map((member) => {
                  return member.role == "normal" ? (
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          name={`${member.user}`}
                          type="checkbox"
                          checked={members.indexOf(member.user) !== -1}
                          // onChange={(e) => handleAddMember(e.target.checked)}
                          onChange={handleAddMember}
                          className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          {member.email}
                        </label>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <form onSubmit={(e) => onDescriptionSubmit(e)}>
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
                  value={newDescription}
                  onChange={handleDescription}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-primary mr-2 disabled:text-gray-400"
                  disabled={!editMode}
                >
                  Sửa dự án
                </button>
              </div>
            </form>

            <div className="checklist mt-5">
              <Checklist task={task} loading={loading} />
            </div>
            <div className="flex justify-center mx-auto">
              {isSubmitting && <ThreeDotsWave />}
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default CongViecDetailModal;
