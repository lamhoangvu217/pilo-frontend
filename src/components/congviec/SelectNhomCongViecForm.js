import React, { Fragment } from "react";

function SelectNhomCongViecForm() {
  return (
    <div>
      <span className="label-text text-black text-md font-bold">
        Chọn nhóm công việc
      </span>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  );
}

export default SelectNhomCongViecForm;
