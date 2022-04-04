import React, { useState } from "react";
import { vi } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
function Timeline() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={vi}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range mt-3 flex flex-row justify-between">
          <div>
            <span className="label-text text-black font-semibold block mb-2 mt-1">
              Ngày bắt đầu
            </span>
            <input
              className={
                "input font-medium bg-white  text-black rounded-lg py-4 border-2 border-gray-300"
              }
              {...startDateInputProps}
              placeholder="Ngày bắt đầu"
            />
          </div>

          <ArrowNarrowRightIcon className="w-8 h-8 text-gray-300 mt-10" />
          <div>
            <span className="label-text text-black font-semibold block mb-2 mt-1">
              Ngày kết thúc
            </span>
            <input
              className={
                "input font-medium bg-white  text-black rounded-lg py-4 border-2 border-gray-300"
              }
              {...endDateInputProps}
              placeholder="Ngày kết thúc"
            />
          </div>
        </div>
      )}
    </DateRangePicker>
  );
}

export default Timeline;
