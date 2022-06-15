import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/reducers/auth/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import MetaTitle from "utils/MetaTitle";
const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tên của bạn"),
  position: yup.string().required("Vui lòng nhập chức vụ của bạn"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .max(40, "Email tối đa 40 ký tự")
    .email("Bạn phải nhập đúng định dạng email"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Mật khẩu phải tối thiểu 8 kí tự, bao gồm có ít nhất một kí tự in hoa, kí tự in thường, kí tự số và kí tự đặc biệt"
    ),
});
const Register = () => {
  const dispatch = useDispatch();
  const successSignUp = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onRegisterSubmit = async (values) => {
    try {
      const action = registerUser(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      toast.success(
        "Đăng ký tài khoản thành công. Bạn vui lòng đợi trong giây lát!",
        {
          duration: 2000,
          position: "top-right",
          className: "bg-green-500 text-white",
          icon: "👏",
        }
      );
      setTimeout(() => successSignUp("/dashboard"), 2500);
      await sleep(2500);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MetaTitle title="Đăng ký tài khoản - Pilo" />

      <div className="h-screen bg-white flex items-start pt-12 justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Toaster />
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-[200px] cursor-pointer"
                src="/images/landingpage/logo.svg"
                alt="Workflow"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Đăng ký tài khoản mới
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onRegisterSubmit)}
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  username
                </label>
                <input
                  className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Tên của bạn"
                  {...register("username")}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  autoComplete="on"
                  {...register("email")}
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Địa chỉ email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="appearance-none  rounded-none relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Mật khẩu"
                />
              </div>
              <div>
                <label htmlFor="position" className="sr-only">
                  Chức vụ
                </label>
                <input
                  type="text"
                  {...register("position")}
                  className="appearance-none  rounded-b-md relative block w-full px-4 py-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl"
                  placeholder="Chức vụ tại công ty"
                />
              </div>
              {/* <div>
              <label htmlFor="password" className="sr-only">
                Nhập lại mật khẩu
              </label>
              <input
                name="password2"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nhập lại mật khẩu"
              />
            </div> */}
            </div>
            <div className="flex justify-center mx-auto">
              {isSubmitting && <ThreeDotsWave />}
            </div>
            {errors.password && (
              <div className="flex justify-center mx-auto">
                <span className="text-base text-red-500 font-semibold">
                  {errors.password.message}
                </span>
              </div>
            )}
            {errors.email && (
              <div className="flex justify-center mx-auto">
                <span className="text-base text-red-500 font-semibold">
                  {errors.email.message}
                </span>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group disabled:opacity-75 disabled:bg-gray-400 relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng ký
            </button>
            <div className="text-center">
              <span className="text-black">Bạn đã có tài khoản?</span>
              <Link to="/login" className="text-red-500 ml-1 font-semibold">
                Đăng nhập
              </Link>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <span className="block mb-2 font-medium text-gray-500">
              hoặc đăng ký bằng
            </span>
            <img
              className="w-[30px]"
              src="/images/landingpage/google_logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
