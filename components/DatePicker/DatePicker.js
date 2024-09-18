import React, { useState } from "react";
import styles from "./DatePicker.module.css";

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    onChange(selectedDate);
  };

  return (
    <input
      type="date"
      className={styles["date-picker"]}
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
