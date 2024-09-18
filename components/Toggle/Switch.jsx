import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Switch = ({ defaultOn = true, disabled = false }) => {
  const [on, setOn] = useState(defaultOn);
  const handleToggle = () => {
    if (!disabled) {
      setOn((prevOn) => !prevOn);
    }
  };
  
  return (
    <div className={`${styles.switch} ${on ? styles.on : styles.off} ${
      disabled ? styles.disabled : ""
    }`}>
      <div className={styles.toggle} onClick={handleToggle}></div>
    </div>
  );
};

export default Switch;
