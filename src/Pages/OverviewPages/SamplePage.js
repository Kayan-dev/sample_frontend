import React from "react";
import UploadFile from "../../components/Form/uploadFile";

export default function SamplePage() {
  // TODO logic to manage the state still needs to be written
  // const [plates, setPlates] = useState([state]);
  // const [barcode, setBarcode] = useState([""]);

  return (
    <div>
      <h3>The Sample Overview Page</h3>
      <UploadFile></UploadFile>
    </div>
  );
}
