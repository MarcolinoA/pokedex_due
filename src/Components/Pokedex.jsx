import Card from "./Card/Card";
import Navbar from "./navbar/Navbar";
import '../App.css';

const Pokedex = () => {
  return(
    <div className="pokedex">
      <Navbar />
      <Card />
    </div>
  );
}

export default Pokedex;