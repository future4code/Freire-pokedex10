
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { PokemonListContainer } from './style';

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [pokeInfos, setPokeInfos] = useState([])

const getAllPokemons = () =>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then((response)=>{
    setPokemons(response.data.results)
    console.log(response.data.results)
    // alert('SUCESSO')
  })
    .catch((error)=>{
      console.log(error)
      alert('erro')
  })
  
}

useEffect(()=>{
  getAllPokemons()
},[])

const listCards = pokemons.map((item)=>{
  return <PokemonCard nome= {item.name}></PokemonCard>
})

useEffect(() =>{
  const data = [];
  pokemons.forEach((pokemon)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then((response)=>{
      data.push(response.data)
      if (data.length === 20) {
        setPokeInfos(data);
        console.log(data)
      }
    })
    .catch((error) =>{
      console.log(error)
    })
  })
},[pokemons])


  return (
    <PokemonListContainer>
    <PokemonCard pokeInfos = {pokeInfos}></PokemonCard>
    {/* {listCards} */}
    </PokemonListContainer>
  );
}

export default Home;
