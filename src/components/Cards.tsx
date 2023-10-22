import React from "react";
import "../styles/Cards.css"; // Import your CSS file for styling

const cardData = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
];

function Cards() {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
