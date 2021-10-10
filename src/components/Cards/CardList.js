import React from "react";
import Card from "./plateCard";

const CardList = ({ info }) => {
  const cardArray = info.map((card, i) => {
    return (
      <Card
        key={i}
        id={info[i].id}
        barcode={info[i].barcode}
        location={info[i].location}
        freezerID={info[i].freezerID}
        Date={info[i].Date}
        PlateType={info[i].PlateType}
      />
    );
  });
  return <div>{cardArray}</div>;
};
export default CardList;
