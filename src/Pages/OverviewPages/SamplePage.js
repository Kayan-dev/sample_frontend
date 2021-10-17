import React, { useState } from "react";
import UploadFile from "../../components/Form/uploadFile";

export default function SamplePage() {
  const state = [
    {
      Barcode: 5634,
      Owner: "Efe",
      Source: "MS-qPCR",
      Volume: "2 ml",
      Buffer: "Trist 8.0 pH",
      SampleType: "DNA",
    },
    {
      Barcode: 4334,
      Owner: "Marta",
      Source: "MSD",
      Volume: "Ghappy",
      Buffer: "Bachata",
      SampleType: "Sugar",
    },
  ];

  // const [plates, setPlates] = useState([state]);
  // const [barcode, setBarcode] = useState([""]);

  // const onSubmitChange = (csv) => {
  //   const newState = [...state];
  //   newState.push(csv);
  //   setPlates({ owner: newState });
  //   console.log("Changed:", plates);
  // };

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   setBarcode(e.target.value);

  //   console.log("submitted", e.target.value);
  // };

  if (!state) return <div>"Loading...</div>;
  return (
    <div>
      <h3>The Sample Overview Page</h3>
      <UploadFile></UploadFile>
    </div>
  );
}
