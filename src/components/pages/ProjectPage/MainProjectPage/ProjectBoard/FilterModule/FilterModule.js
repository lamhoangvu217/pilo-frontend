import React from "react";
import AddGroupCongViec from "../GroupCongViecModule/AddGroupCongViec";
import FilterDoneStatus from "./FilterDoneStatus";
import FilterGroupCongViec from "./FilterGroupCongViec";

function FilterModule() {
  return (
    <div className="bg-white flex flex-row justify-between">
      <div className="flex flex-row py-3 px-5 items-center justify-start">
        <FilterGroupCongViec />
        <FilterDoneStatus />
        
      </div>

      <AddGroupCongViec />
    </div>
  );
}

export default FilterModule;
