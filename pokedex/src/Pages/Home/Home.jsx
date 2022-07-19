import React, {useState} from 'react';
import styled from 'styled-components';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import PokemonCard from '../../components/PokemonCard'
import bulbasaur from '../../components/PokemonCard/img/bulbasaur.png'

function Home() {
  return (
    <div>
    <PokemonCard>
    <p>01</p>
    <h1>Bulbasaur</h1>
<img src={bulbasaur} alt="" />

    </PokemonCard>
    Home
    </div>
  )
}

export default Home