import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ThanhVien from "./ThanhVien";
import Timeline from "./Timeline";
import projectApi from "api/projectApi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  description: yup.string().required("Vui lòng nhập chức vụ của bạn"),
  start_date: yup.date().required("Vui lòng nhập ngày bắt đầu"),
  end_date: yup.date().required("Vui lòng nhập ngày kết thúc"),
  thumbnail: yup.string().required("Vui lòng nhập link ảnh thumbnail"),
});
function AddDuAnModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const onProjectSubmit = async (values) => {
    try {
      const projectData = await projectApi.create(values);
      console.log(projectData);
      toast.success("Tạo dự án thành công!", {
        duration: 2000,
        position: "top-right",
        className: "bg-green-500 text-white",
        icon: "👏",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen px-4 text-center">
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
        <div className="inline-block w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <form onSubmit={handleSubmit(onProjectSubmit)}>
              <h1 className="text-xl text-black font-bold">Thêm mới dự án</h1>
              <hr className="mt-3 mb-3" />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Tên dự án
                  </span>
                </label>
                <input
                  placeholder="nhập tên dự án"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("name")}
                />
              </div>
              {/* <Timeline /> */}

              <div className="date-range mt-3 flex flex-row justify-between">
                <div>
                  <span className="label-text text-black font-semibold block mb-2 mt-1">
                    Ngày bắt đầu
                  </span>
                  <input
                    className="input font-medium bg-white  text-black rounded-lg py-4 border-2 border-gray-300"
                    {...register("start_date")}
                    placeholder="Ngày bắt đầu"
                  />
                </div>

                <ArrowNarrowRightIcon className="w-8 h-8 text-gray-300 mt-10" />
                <div>
                  <span className="label-text text-black font-semibold block mb-2 mt-1">
                    Ngày kết thúc
                  </span>
                  <input
                    className={
                      "input font-medium bg-white  text-black rounded-lg py-4 border-2 border-gray-300"
                    }
                    {...register("end_date")}
                    placeholder="Ngày kết thúc"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Mô tả
                  </span>
                </label>
                <textarea
                  className="textarea h-24  bg-white text-black border-gray-300 border-2"
                  placeholder="nhập thông tin bổ sung"
                  defaultValue={""}
                  {...register("description")}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Thumbnail
                  </span>
                </label>
                <input
                  placeholder="nhập link thumbnail"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("thumbnail")}
                />
              </div>
              <ThanhVien />
              <div className="flex justify-center mx-auto">
                {isSubmitting && <ThreeDotsWave />}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                class="btn btn-primary mt-5 w-full mb-1"
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddDuAnModal;
