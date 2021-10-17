import React from "react";
import CardList from "../../components/Cards/CardList";
import CsvReader from "../../components/Form/CsvReader";
import CSVReader1 from "../../components/Form/ImportCSV";
import ImportCSV from "../../components/Form/ImportCSV";
import UploadFile from "../../components/Form/uploadFile";
import { info } from "./info";

export default function PlatePage() {
  return (
    <div>
      <h3>The Plate Overview Page</h3>
      <div>{/* <CardList info={info}></CardList> */}</div>
      {/* <CSVReader1></CSVReader1> */}
      -------------------
      <UploadFile></UploadFile>
    </div>
  );
}
