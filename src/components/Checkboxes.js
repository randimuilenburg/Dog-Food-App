import React from "react";
import Card from "./Card";
import Cards from "./Cards";
import ReactDOM from "react-dom";
// import { fontFamily } from "react-bootstrap";

const boxOptions = (props) => {
  return (
    <div>
      {props.boxOptions.map((x) => (
        <div key={`div-${x.abbrev}`}>
          <label key={`label-${x.abbrev}`} style={labelStyle}>
            {x.name}
          </label>
          <input
            type="checkbox"
            style={boxStyle}
            key={`input-${x.abbrev}`}
          ></input>
        </div>
      ))}{" "}
    </div>
  );
};

// const boxStyleOne = {
//   height: "20px",
//   width: "20px",
//   paddingLeft: "10px",
//   paddingRight: "94px",
//   paddingBottom: "56px",
// };

const boxStyle = {
  height: "20px",
  width: "20px",
  // top: "0",
  borderRadius: "10px",
  paddingLeft: "10px",
  paddingRight: "24px",
  paddingBottom: "56px",
};

const labelStyle = {
  paddingBottom: "56px",
  paddingLeft: "24px",

  fontFamily: "HelveticaNeue",
};

export default boxOptions;
