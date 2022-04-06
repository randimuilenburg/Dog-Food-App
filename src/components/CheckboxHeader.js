import React from "react";

const filterByGrains = () => {
  return (
    <div style={styling} className="Brands">
      <p>Sort by Grain Preference</p>
    </div>
  );
};

const styling = {
  // fontFamily: "HelveticaNeue",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#192024",
  paddingTop: "73px",
  paddingBottom: "23px",
  paddingLeft: "23px",
  backgroundColor: "#F9FAFB",
};

export default filterByGrains;
