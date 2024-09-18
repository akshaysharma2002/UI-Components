import React,{useState} from "react";
import DatePicker from "@/components/DatePicker/DatePicker";
function DatepickerComponent() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };
  return (
    <>
      <h1>Date Picker</h1>
      <DatePicker onChange={handleDateChange} />
      <p>Selected Date: {selectedDate}</p>
    </>
  );
}

export default DatepickerComponent;
