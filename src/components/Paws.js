import React from "react";
import PawsLogo from "../images/Paws.jpg";

const Paws = () => {
  return (
    <div
      style={{
        paddingTop: "19px",
        paddingBottom: "19px",
        paddingLeft: "16px",
        backgroundColor: "#FFFFFF",
        borderBottom: "thin solid",
        borderColor: "silver",
        width: "100%",
      }}
      className="Logo"
    >
      <img src={PawsLogo} alt="Paw Prints" />
    </div>
  );
};

export default Paws;
