import React from "react";
import Clock from "react-live-clock";
import useWindowSize from "../../../hooks/useWindowSize";

function MainDashboard(props) {
  const [width, height] = useWindowSize();
  const mainHeight = height - 64;
  const { user, loading } = props;
  if (loading) {
    return "";
  }
  return (
    <main
      className="bg-white w-full px-5 "
      style={{ height: `${mainHeight}px` }}
    >
      <div className="fixed bottom-6 ">
        <span className="text-black font-semibold">
          Xin chào {user.username}
        </span>
        <div className="text-red-500 text-5xl mt-3 font-bold">
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"Asia/Ho_Chi_Minh"}
          />
        </div>
        <div className="w-64 mt-3">
          <span className="text-black">
            "Great achievement is usually born of great sacrifice, and is never
            the result of selfishness"
          </span>
        </div>
        <div className="mt-3">
          <button className="px-3 py-2 bg-violet-500 text-white rounded-md">
            Bật chế độ tập trung
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainDashboard;
