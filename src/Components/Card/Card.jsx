import { useState } from "react";
import axios from "axios";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import "./CardStyle.css";

const Card = () => {
  const [pokeData, setPokeData] = useState([]); //use state per creare l'array dall'api
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); //use state per tenere in memoria l'url
  const [nextUrl, setNextUrl] = useState(); //use state per il prossimo url e quello precedente
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  //questa funzione viene eseguita ad ogni run
  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url); //grazie ad axios eseguo una richiesta sull'url
    //setto tutti gli use state in base a cio che mi serve, trovo le informazioni da console.log(res)
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  //questa funzione tramite map crea un array degli elementi di res (array dei 20 pokemon) console.log(res);
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url); //faccio il map uno ad uno degli elementi dell'array res: console.log(result);
      setPokeData((state) => {
        //riempio setPokeData con gli elementi di cui ho bisogno
        state = [...state, result.data]; //aggiungo il nuovo elemento alla copia dell'array
        state.sort((a, b) => (a.id > b.id ? 1 : -1)); //ordino i pokemon per id
        return state;
      });
    });
  };

  //svolge la stessa funzione di uno useEffect ma con questo avevo un errore dato dalla "react strict mode", lo eseguiva due volte al primo render
  useState(() => {
    pokeFun();
  }, [url]);

  //CARD NUOVA POKEDEX DUE
  return (
    <>
      <div className="container">
        {pokeData.map((item) => (
          <div className="card-container">
            <FrontSide item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
//CARD NUOVA POKEDEX DUE
