import React, { useState } from "react";
import styles from "./Calendar.module.css";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth + 1);
  };

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today.getDate());
  };

  const getDaysInMonth = (year, month) => {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const emptyCells = Array.from({ length: firstDayOfWeek }, (_, i) => (
    <div key={`empty-${i}`} className={styles["empty-cell"]}></div>
  ));
  return (
    <div className={styles["calendar"]}>
      <div className={styles["month"]}>
        <button onClick={handlePrevYear}>&lt;&lt;</button>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}
        </h2>
        <h3>{currentYear}</h3>
        <button onClick={handleNextMonth}>&gt;</button>
        <button onClick={handleNextYear}>&gt;&gt;</button>
      </div>
      <div className={styles["days"]}>
        {daysInWeek.map((day) => (
          <div key={day} className={styles["day-label"]}>
            {day}
          </div>
        ))}
        {emptyCells}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles.day} ${
              selectedDate === day ? styles.selected : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className={styles["selected-date"]}>
        Selected Date:{" "}
        {selectedDate
          ? `${selectedDate}/${currentMonth + 1}/${currentYear}`
          : "None"}
      </div>
      <button className={styles["today-button"]} onClick={handleTodayClick}>
        Today
      </button>
    </div>
  );
};

export default Calendar;
