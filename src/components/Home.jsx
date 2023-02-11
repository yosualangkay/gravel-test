import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ListCard from "./CardList";
import Detail from "./Detail";
import { Alert, Button } from "react-bootstrap";

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

  const turun = () => {
    document.getElementById('detail').scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (

    <div className="container">
      <Button className="btn-move" onClick={turun} >Move to Detail</Button>

      <div className="listpoke">
      <h1 className="title">List Pokemon</h1>      
        <ListCard
          poke={dataPokemon}
          loading={loading}
          info={(pk) => setPokeData(pk)}
          data={pokeData}
          
        />
      </div>
        <div className="detailpoke" id="detail">
        <h1 className="title">Detail Pokemon</h1>
        {
          (!pokeData) ? (
            <Alert className="alert" variant="primary">
              Pilih Pokemon untuk melihat detail!
            </Alert>
          ) : (
            <Detail data={pokeData} />
          )
        }
        </div>

    </div>
  );
};

export default Home;
