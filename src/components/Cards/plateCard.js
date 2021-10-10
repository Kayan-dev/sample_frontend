import React from "react";

const Card = ({ id, barcode, location, freezerID, Date, PlateType }) => {
  return (
    <div className="bg-grey  mw6 dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>Barcode: {barcode}</h2>
        <p>Location: {location}</p>
        <p>{freezerID}</p>
        <p>{Date}</p>
        <p>{PlateType}</p>
      </div>
    </div>
  );
};

export default Card;
