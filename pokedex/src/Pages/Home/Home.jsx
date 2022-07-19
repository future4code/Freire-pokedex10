
import React, {useState} from 'react';
import styled from 'styled-components';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

function Home() {
  return (
    <div>

    
    <PokemonCard></PokemonCard>
  

    </div>
  );
}

export default Home;
