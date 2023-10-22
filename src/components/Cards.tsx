import React from "react";
import Source from "./Source";
import Destination from "./Destination";
import "../styles/Cards.css";

import { BiTransferAlt } from "react-icons/bi";

function Cards() {
  return (
    <div className="card-container">
      <Source />
      <BiTransferAlt className="transfer-icon" />
      <Destination />
    </div>
  );
}

export default Cards;
