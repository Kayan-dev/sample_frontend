import React, { useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import UploadFile from "../../components/Form/uploadFile";

export default function SamplePage() {
  // TODO logic to manage the state still needs to be written
  // const [plates, setPlates] = useState([state]);
  // const [barcode, setBarcode] = useState([""]);

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  // const dispatch = useDispatch();

  return (
    <div>
      <h3>The Sample Overview Page</h3>

      <UploadFile></UploadFile>
      {/* <div>
        <h3>Upload CSV file</h3>
        <input
          className="bg-black-10"
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={UploadFile}
        />
        <CSVLink className="pa3" data={data}>
          Download table
        </CSVLink>

        <div className="ba ma4 bw1 shadow-5 pa3 bg-black-10">
          <DataTable
            highlightOnHover
            columns={columns}
            data={data}
            pagination
          />
        </div>
      </div> */}
    </div>
  );
}
