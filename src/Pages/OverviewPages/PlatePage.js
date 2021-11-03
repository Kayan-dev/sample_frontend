import React from "react";
import Filtering from "../../components/filter/Filter";
import UploadFile from "../../components/CSV/uploadFile";

export default function PlatePage() {
  // TODO logic to manage the state still needs to be written
  // const [plates, setPlates] = useState([state]);
  // const [barcode, setBarcode] = useState([""]);

  return (
    <div>
      <h3>The Plate Overview Page</h3>
      <UploadFile></UploadFile>
    </div>
  );
}
