import React from 'react';
import style from './Progress.module.css'

const ProgressBar = ({ percentage }) => {
  return (
    <>
    <br></br>      
    <div className={style["progress-bar"]}>
        <div className={style["filler"]} style={{ width: `${percentage}%` }} />
        </div>
    </>
  );
};

export default ProgressBar;
