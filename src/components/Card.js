import React, { useState } from "react";

function BrandCards(props) {
  const [isShown, setIsShown] = useState(false);

  // let imageSrc = `https://www.kayak.com/${props.image}`;
  return (
    <div
      id="brandCard"
      style={{ border: isShown ? "solid" : null }}
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div style={logoStyling} className="logos">
        {/* <img
          style={{ tranform: "translate(0%, 25%" }}
          className="logoimg"
          src={imageSrc}
          alt={imageSrc}
        ></img> */}
        <div
          style={{
            transform: "translate(0%, 25%)",
          }}
        >
          <h4 className="logoheader">{props.name}</h4>
          {isShown && (
            <div>
              {/* <p className="onHover">{props.alliance}</p> */}
              <p className="onHover">{props.hasGrains}</p>
              <p className="onHover">{props.phone}</p>
              <p className="onHoverSite">{props.site}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const logoStyling = {
  // fontFamily: "HelveticaNeue",
  fontSize: "16px",
  fontWeight: "bold",
  fontColor: "#192024",
  paddingRight: "60px",
};

export default BrandCards;
