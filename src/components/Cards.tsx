import React from "react";
import Source from "./Source";
import Destination from "./Destination";
import "../styles/Cards.css";

function Cards() {
  return (
    <div className="card-container">
      <Source />
      <Destination />
    </div>
  );
}

export default Cards;
