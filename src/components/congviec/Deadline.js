import React, { useState } from "react";
import { vi } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
function Deadline() {
  const [date, setDate] = useState();
  return (
    <div>
      <DatePicker date={date} onDateChange={setDate} locale={vi}>
        {({ inputProps, focused }) => (
          <div className="flex flex-col">
            <span className="label-text text-black font-semibold block mb-2 mt-1">
              Hạn hoàn thành
            </span>
            <input
              className={
                " bg-[#2ecc71] font-medium  text-white rounded-lg py-4 focus:border-0 border-0"
              }
              {...inputProps}
            />
          </div>
        )}
      </DatePicker>
    </div>
  );
}

export default Deadline;
