import React from 'react'

function ChecklistItem() {
    return (
        <div className="flex flex-row mt-3">
            <input type="checkbox" className="rounded-sm"/>
            <input type="text" placeholder="Nhập checklist" className="checklistinput px-3 border-0   text-black h-5 text-sm"/>
        </div>
    )
}

export default ChecklistItem
