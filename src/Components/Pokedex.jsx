import Card from "./Card/Card";
import Navbar from "./navbar/Navbar";
import "../App.css";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="div-navbar">
        <Navbar />
      </div>

      <div className="div-card">
        <Card />
      </div>
    </div>
  );
};

export default Pokedex;
