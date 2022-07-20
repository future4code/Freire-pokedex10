import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Container, ContainerArea, ButtonDiv, ButtonType } from "./style";
import front from "./img/front.png";
import back from "./img/back.png";
import stats from "./img/stats.png";
import bulbasaur from "./img/bulbasaur.png";
import folha from "./img/folha.png";

function Details() {
  return (
    <Container>
      <h1>Detalhes</h1>
      <ContainerArea>
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
      </ContainerArea>
    </Container>

    /* <h1>Detalhes</h1>
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
    </Container> */
  );
}

export default Details;
