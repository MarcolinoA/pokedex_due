import React, { useState } from "react";
import "./CardStyle.css";

const FrontSide = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (item) => {
    //infoPokemon(item);
    setIsFlipped(!isFlipped);
    console.log("suca");
  };

  const rotateCard = (event) => {
    const card = event.currentTarget;
    card.classList.toggle("flipped");
  };

  return (
    <>
      <div
        className="front-side"
        onClick={(event) => {
          handleCardClick();
          rotateCard(event);
        }}
      >
        <div className="content">
          <img
            className="card-img"
            src={item.sprites.front_default}
            alt={item.name}
          />
          <p className="card-id">{`# ${item.id}`}</p>
          <h2 className="card-name">{item.name}</h2>
          <div className="card-types">
            {item.types.map(
              (
                type,
                index //map di types...
              ) => (
                <p key={index} className={`type ${type.type.name}`}>
                  {type.type.name}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontSide;
