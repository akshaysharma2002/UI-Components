import React from "react";
import Calendar from "@/components/Calendar/Calendar";
function CalenderComponent() {
  const handleDateSelect = (date) => {
    console.log("Selected Date:", date);
  };
  return (
    <>
      <div>
        <h2>Calendar</h2>
        <Calendar onSelect={handleDateSelect} mode="single" />
      </div>
    </>
  );
}

export default CalenderComponent;
