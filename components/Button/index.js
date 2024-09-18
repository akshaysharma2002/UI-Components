import React from "react";

const Button = ({ attributeData }) => {
  return (
    <button
      className={`btn ${attributeData.buttonClass}`}
      type={attributeData.type}
    >
      {attributeData.text}
    </button>
  );
};

export default Button;
