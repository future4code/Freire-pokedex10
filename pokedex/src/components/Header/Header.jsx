import React, { useState } from "react";
import PokeLogo from "../../img/logo.png";
import { HeaderContainer } from "./style";
import { Button } from "./style";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";

export default function Header() {
  const [currentscreen, setCurrentScreen] = useState("");

  // const navigate = useNavigate();

  const onClickPokedex = () => {
    setCurrentScreen("pokedex");
    // navigate("/pokedex");
  };

  const onClickHome = () => {
    setCurrentScreen("home");
  };

  console.log(window.location.pathname);

  return (
    <HeaderContainer CurrentScreen={currentscreen}>
      <Button id="home" onClick={onClickHome}>
        Home
      </Button>
      <img src={PokeLogo}></img>
      <Button id="pokedex" onClick={onClickPokedex}>
        Pokédex
      </Button>
    </HeaderContainer>
  );
}
