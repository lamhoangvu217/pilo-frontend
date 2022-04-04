import React, { useState } from "react";
import ChecklistItem from "./ChecklistItem";
function Checklist() {
  const [checklistNum, setChecklistNum] = useState(0);
  const checklists = [];
  for (var i = 0; i < checklistNum; i++) {
      checklists.push(<ChecklistItem key={i} />)
  }
  const onAddChecklist = () => {
      setChecklistNum(checklistNum + 1)
  }
  return (
    <div>
      <span className="label-text text-black block font-bold">Checklist</span>
      <button className="text-black label-text" onClick={onAddChecklist}>+ Thêm checklist mới</button>
      <div>
        {checklists}
      </div>
    </div>
  );
}

export default Checklist;
