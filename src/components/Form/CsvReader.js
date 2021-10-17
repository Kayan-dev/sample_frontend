import { useState } from "react";

export default function ReaderCsv() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  console.log("csv array:" + csvArray);

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text); // plugged in here
    };

    reader.readAsText(file);
  };

  return (
    <form id="csv-form">
      <input
        type="file"
        accept=".csv"
        id="csvFile"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Upload
      </button>
      <br />
      <br />
      {csvArray.length > 0 ? (
        <>
          <table>
            <thead>
              <th>Barcode</th>
              <th>Owner</th>
              <th>Source</th>
              <th>Export</th>
            </thead>
            <tbody>
              {csvArray.map((item, i) => (
                <tr key={i}>
                  <td>{item.Barcode}</td>
                  {/* <td>{item.Owner}</td>
                  <td>{item.Source}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </form>
  );
}
