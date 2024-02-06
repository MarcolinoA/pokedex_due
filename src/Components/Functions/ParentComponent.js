import React, { useState } from "react";
import Card from "./Card";
import OtherComponent from "./OtherComponent";

const ParentComponent = () => {
  const [pokeData, setPokeData] = useState([]);

  return (
    <div>
      <Card setPokeData={setPokeData} />
      <OtherComponent pokeData={pokeData} />
    </div>
  );
};

export default ParentComponent;
