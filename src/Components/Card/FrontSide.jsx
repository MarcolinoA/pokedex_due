import React, { useState } from "react";
import "./CardStyle.css";
import BackSide from "./BackSide";

const FrontSide = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const rotateCard = (event) => {
    const card = event.currentTarget;
    card.classList.toggle("flipped");
  };

  return (
    <>
      <div
        className={`front-side ${isFlipped ? "flipped" : ""}`}
        onClick={(event) => {
          handleCardClick();
          rotateCard(event);
        }}
      >
        <div className={`content`}>
          {!isFlipped ? (
            <>
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
            </>
          ) : (
            <div className="back-side">
              <div className="abilities">
                {item.abilities.map((poke) => {
                  return (
                    <>
                      <h4>
                        <li className="abilities-list">{poke.ability.name}</li>
                      </h4>
                    </>
                  );
                })}
              </div>

              <div className="base-stat">
                {item.stats.map((poke) => {
                  return (
                    <>
                      <p className="stats">
                        {poke.stat.name}:{poke.base_stat}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FrontSide;
