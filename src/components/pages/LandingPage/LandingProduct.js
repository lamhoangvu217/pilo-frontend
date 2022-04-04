import React from "react";
import { Link } from "react-router-dom";
const LandingProduct = () => {
  return (
    <div className="flex py-14 pt-20 bg-white flex-col justify-center">
      <div className="text-center mb-2">
        <span className="block leading-tight font-semibold text-4xl text-[#091e42] mb-3">
          Đó không chỉ là công việc. Đó là cách làm việc cùng nhau.
        </span>
        <span className="block text-xl mb-3 text-[#091e42]">
          Bắt đầu với bảng Trello, danh sách và thẻ. Tùy chỉnh và mở rộng với
          nhiều tính năng hơn khi tinh <br /> thần làm việc nhóm của bạn phát
          triển. Quản lý các dự án, sắp xếp nhiệm vụ và xây dựng tinh thần{" "}
          <br /> làm việc nhóm—tất cả ở cùng một nơi.
        </span>
        <Link to="/signup">
          <button className="bg-indigo-500 text-white px-5 py-2 hover:font-semibold rounded-md hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-500">
            Bắt đầu làm việc
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[1000px]"
          src="/images/landingpage/board.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingProduct;
