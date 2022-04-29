import React, { useState } from "react";
function Deadline() {
  return (
    <div>
      <div className="flex flex-col">
        <span className="label-text text-black font-semibold block">
          Hạn hoàn thành
        </span>
        <input
          className=" bg-[#2ecc71] font-medium mt-2  text-white rounded-lg focus:border-0 border-0"
          type="date"
        />
      </div>
    </div>
  );
}

export default Deadline;
