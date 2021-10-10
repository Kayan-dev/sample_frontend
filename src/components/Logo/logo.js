import React from "react";
import { Link } from "react-router-dom";
import "../Logo/Logo.css";
import dna from "./AMC_Logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <div className="ma4 mt0">
        <div className="Tilt-inner pa3">
          {" "}
          <img style={{ paddingTop: "10px" }} alt="logo" src={dna} />{" "}
        </div>
      </div>
    </Link>
  );
}
