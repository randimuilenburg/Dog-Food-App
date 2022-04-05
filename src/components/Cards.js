import React from "react";
import Card from "./Card";

const createCards = (props) => {
  const allianceMap = {
    OW: "Oneworld",
    ST: "Sky Team",
    SA: "Star Alliance",
  };
  return props.airlineData.map((x) => (
    <Card
      name={x.name}
      image={x.logoURL}
      alliance={allianceMap[x.alliance]}
      phone={x.phone}
      site={x.site}
    ></Card>
  ));
};

export default createCards;
