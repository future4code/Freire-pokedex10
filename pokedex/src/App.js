import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router } from "./Routes/Router";
import { GlobalStyle } from "./Global";
import { ContextPokemon } from "./ContextPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeInfos, setPokeInfos] = useState([]);
  const [pokeId, setPokeId] = useState();

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setPokemons(response.data.results);
        // alert('SUCESSO')
      })
      .catch((error) => {
        console.log(error);
        alert("erro");
      });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    const data = [];
    pokemons.forEach((pokemon) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          data.push(response.data);
          if (data.length === 20) {
            const sortPokemons = data.sort((a, b) => {
              return a.id - b.id;
            });
            setPokeInfos(sortPokemons);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [pokemons]);

  return (
    <ContextPokemon.Provider value={{ pokeInfos, pokeId, setPokeId }}>
      <Router />
      <GlobalStyle />
    </ContextPokemon.Provider>
  );
}

export default App;
