import React, { useState } from "react";
import AddChecklist from "./AddChecklist";
import ChecklistItem from "./ChecklistItem";
function Checklist({ task }) {
  console.log(task);
  return (
    <div>
      {/* <span className="label-text text-black block font-bold">Checklist</span>
      <button className="text-black label-text" onClick={onAddChecklist}>
        + Thêm checklist mới
      </button>
      <div>{checklists}</div> */}
      <div className="text-md font-bold mb-2 text-black">Checklist</div>
      <div className="space-y-2">
        {task.checklists.map((item) => (
          <ChecklistItem key={item.id} item={item} task={task} />
        ))}
      </div>

      <div>
        <AddChecklist taskId={task.id} />
      </div>
    </div>
  );
}

export default Checklist;
