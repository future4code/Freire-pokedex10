import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Content,
  ContentArea,
  HeaderContainer,
  PokedexButton,
  HomeButton,
  TypeItem
} from "./style";
import { ButtonType, ButtonDiv } from "../../components/PokemonCard/styles";
import front from "./img/front.png";
import back from "./img/back.png";
import stats from "./img/stats.png";
import bulbasaur from "./img/bulbasaur.png";
import folha from "./img/folha.png";
import PokeLogo from "../../img/logo.png";
import { goToHome } from "../../routes/Coordinator";
import { IoIosArrowBack } from "react-icons/io";
import { ContextPokemon } from "../../ContextPokemon";
import axios from "axios";

function Details() {
  const navigate = useNavigate();
  const { pokeId } = useContext(ContextPokemon);
  const [pokeDetails, setPokeDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => {
        setIsLoading(true)
        console.log('respostaPI',response.data);
        setPokeDetails(response.data)
        setIsError(false)
       
      })
      .catch((error) => {
        setIsLoading(true)
        console.log(error);
        alert("erro");
        setIsError(true)
      })
       .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
       {isLoading && <h1>Carregando...</h1>}
       {isError && <h1>Erro 404</h1>}
       {(pokeDetails === null || undefined ) && <h1>Erro</h1>}
       {console.log(pokeDetails)}
        { !isLoading && !isError && (
          < div>
 
      <HeaderContainer>
        <HomeButton onClick={() => goToHome(navigate)}>
          <IoIosArrowBack /> <span>Todos Pokémons</span>
        </HomeButton>
        <img src={PokeLogo}></img>
        <PokedexButton>Pokédex</PokedexButton>
      </HeaderContainer>
      <Content>
        <h1>Detalhes</h1>
        <ContentArea>
          <Card pokemonTypes={pokeDetails.types}>
            <div id="front">
             
            <img  
              src={
              
               pokeDetails[`sprites`][`front_default`]}
            
            alt={pokeDetails.name} />
            </div>
            <div id="back">
            <img 
              src={
               
              pokeDetails[`sprites`][`back_default`]
            }
            alt={pokeDetails.name} />
            </div>
            <div id="stats">
              <img src={stats} alt="stats" />
            </div>
            <div id="title">
            <p>#0{pokeDetails.id}</p>
            <h1>{ pokeDetails.name.toUpperCase()}</h1>
            
            <ButtonDiv>
          {pokeDetails.types &&
           pokeDetails.types.map((type) => {
              return (
                <ButtonType pokemonTypes={type.type.name}>
                  <img src={folha} alt="" /> <p>{type.type.name}</p>
                </ButtonType>
              );
            })}
        </ButtonDiv>
            </div>
             <div id="moves">
               <h1>Moves:</h1>
               <br />
              { pokeDetails.moves &&
              pokeDetails.moves.splice(10) &&
            pokeDetails.moves.map((item)=> {
              return <TypeItem>{item.move.name}</TypeItem>
            })}
            </div> 
            <div id="image">
              <img 
              src={
                
              pokeDetails[`sprites`][`other`][`official-artwork`][`front_default`]
            }
            alt={pokeDetails.name} />
            </div>
          </Card>
        </ContentArea>
      </Content>
      </div>
        )}
    </div>
  );
}

export default Details;
