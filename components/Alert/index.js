import React, { useEffect } from "react";

const MyAlert = ({ alertAttributeData }) => {
  return (
    <div
      className={`alert alert-${alertAttributeData.type} ${alertAttributeData.alertClass}  alert-slide-up`}
    >
      {alertAttributeData.message}
    </div>
  );
};

export default MyAlert;
