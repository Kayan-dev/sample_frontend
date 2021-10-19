import React, { useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
// import { useDispatch } from "react-redux";

export default function UploadFile() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  // const dispatch = useDispatch();

  // TODO My problem is now that I need to turn this into a true component
  // I can only make it this for either sample data or plate data
  // so how do I break this apart ?

  //TODO Create a dispatch to the Redux store whenever a change happens
  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  // process CSV data
  const processData = (dataString) => {
    // DataStringLines will contain the row data
    const dataStringLines = dataString.split(/\r\n|\n/);
    // headers will contain the name of the columns
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );
    // Adding the data per row into a list of array using a for loop
    const list = [];
    // For every row, split the data in the csv file to their corresponding columns
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: (row) => row[c],
    }));
    // Add the row data and column names into local state.
    setData(list);
    setColumns(columns);
  };
  // What is the data?
  console.log("data:", data);

  return (
    <div>
      <h3>Upload CSV file</h3>
      <input
        className="bg-black-10"
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
      />
      <CSVLink className="pa3" data={data}>
        Download table
      </CSVLink>
      <div className="ba ma4 bw1 shadow-5 pa3 bg-black-10">
        <DataTable highlightOnHover columns={columns} data={data} pagination />
      </div>
    </div>
  );
}
