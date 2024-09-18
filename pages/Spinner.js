import React from "react";
import Spinner from "@/components/Spinner/spinner";

function SpinnerComponent() {
  const spinnerConfig = {
    size: "50px",
    color: "#000000",
    padding: "20px",
    spacing: "10px",
    // color: "#ffff",
    //   border: "2px solid",
  };
  return (
    <>
      <div>
        <h1>Spinner Component</h1>
        <br></br>
      </div>
      <Spinner
        size={spinnerConfig.size}
        color={spinnerConfig.color}
        // size="50px"
        // color="#0000"
        padding={spinnerConfig.padding}
        spacing={spinnerConfig.spacing}
        // padding="20px"
        // spacing="10px"
        // style={{ background: }}
        style={{ background: "#0000" }}
      />
    </>
  );
}

export default SpinnerComponent;
