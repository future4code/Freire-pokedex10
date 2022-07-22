import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Content,
  ContentArea,
  HeaderContainer,
  PokedexButton,
  HomeButton,
} from "./style";
import front from "./img/front.png";
import back from "./img/back.png";
import stats from "./img/stats.png";
import bulbasaur from "./img/bulbasaur.png";
import folha from "./img/folha.png";
import PokeLogo from "../../img/logo.png";
import { goToHome } from "../../Routes/coordinator";
import { IoIosArrowBack } from "react-icons/io";

function Details() {
  const navigate = useNavigate();

  return (
    <div>
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
          <Card>
            <div id="front">
              <img src={front} alt="front" />
            </div>
            <div id="back">
              <img src={back} alt="back" />
            </div>
            <div id="stats">
              <img src={stats} alt="stats" />
            </div>
            <div id="title"></div>
            <div id="moves"></div>
            <div id="image">
              <img src={bulbasaur} alt="bulbasaur" />
            </div>
          </Card>
        </ContentArea>
      </Content>
    </div>
  );
}

export default Details;
