import React from "react";
import CardList from "../../components/Cards/CardList";
import UploadFile from "../../components/Form/uploadFile";
import { info } from "./info";

export default function PlatePage() {
  return (
    <div>
      <h3>The Plate Overview Page</h3>
      <UploadFile></UploadFile>
      <div>
        <CardList info={info}></CardList>
      </div>
    </div>
  );
}
