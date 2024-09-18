import React from "react";
import styles from"./spinner.module.css";

const Spinner = ({ size, color, padding, spacing, style }) => {
  const spinnerStyle = {
    "--spinner-size": size,
    "--spinner-color": color,
    "--spinner-padding": padding,
    "--spinner-spacing": spacing,
    ...style,
  };

  return (
    <div className={styles["spinner"]} style={spinnerStyle}>
      <div className={styles["spinner-inner"]}></div>
    </div>
  );
};

export default Spinner;
