import React, { useState } from "react";
import styles from "./timepicker.module.css";

const TimePicker = ({ enable12Hrs, enable24Hrs }) => {
  const [time, setTime] = useState("");
  const [format12Hrs, setFormat12Hrs] = useState(true);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat12Hrs(event.target.value === "12");
  };

  const getFormattedTime = (time) => {
    if (format12Hrs && enable12Hrs) {
      const [hour, minute] = time.split(":");
      const parsedHour = parseInt(hour, 10);
      const amPm = parsedHour >= 12 ? "PM" : "AM";
      const twelveHourFormat = ((parsedHour + 11) % 12) + 1;
      return `${twelveHourFormat}:${minute} ${amPm}`;
    }
    return time;
  };

  return (
    <div className={styles["time-picker"]}>
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        className={format12Hrs ? styles["format-12hrs"] : styles["format-24hrs"]}
      />

      {enable12Hrs && enable24Hrs && (
        <div className={styles["format-toggle"]}>
          {enable12Hrs && (
            <label>
              <input
                type="radio"
                value="12"
                checked={format12Hrs}
                onChange={handleFormatChange}
              />
              12 hrs
            </label>
          )}

          {enable24Hrs && (
            <label>
              <input
                type="radio"
                value="24"
                checked={!format12Hrs}
                onChange={handleFormatChange}
              />
              24 hrs
            </label>
          )}
        </div>
      )}

      <div className={styles["result"]}>Selected Time: {getFormattedTime(time)}</div>
    </div>
  );
};

export default TimePicker;
