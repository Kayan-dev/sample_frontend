import React, { useState } from "react";
import UploadFile from "../../components/CSV/uploadFile";

export default function SamplePage() {
  // TODO logic to manage the state still needs to be written
  // const [plates, setPlates] = useState([state]);
  // const [barcode, setBarcode] = useState([""]);

  // TODO: below is code that will be needed when trying to fetch already existing sample data
  // const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchSpaces());
  //   }, [dispatch]);

  return (
    <div>
      <h3>The Sample Overview Page</h3>
      <UploadFile></UploadFile>
    </div>
  );
}
