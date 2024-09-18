import React from "react";
import styles from"./slider.module.css";

const Slider = ({ value, onChange }) => {
  const handleSliderChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles["slider"]}>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleSliderChange}
      />
      <span className={styles["slider-value"]}>{value}</span>
    </div>
  );
};

export default Slider;
