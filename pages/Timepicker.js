import React, { useState } from "react";
import TimePicker from "@/components/TimePicker/timepicker";
function TimepickerComponent() {
  return (
    <div>
      <h1>Time Picker</h1>
      <h2>12-Hour Format</h2>
      <TimePicker enable12Hrs={true} enable24Hrs={false} />

      <h2>24-Hour Format</h2>
      <TimePicker enable12Hrs={false} enable24Hrs={true} />
    </div>
  );
}

export default TimepickerComponent;
