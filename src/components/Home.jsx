import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ListCard from "./CardList";
import Detail from "./Detail";

const Home = () => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState();

  const pokemonFunc = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(dataPokemon)
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setDataPokemon((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokemonFunc();
  }, [url]);

  return (
    <div className="row">
      <div className="col">
        <ListCard
          poke={dataPokemon}
          loading={loading}
          info={(pk) => setPokeData(pk)}
        />
      </div>
      <div className="col">
        <h1>Detail Pokemon</h1>
        <Detail data={pokeData} />
      </div>
    </div>
  );
};

export default Home;
