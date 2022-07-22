import { useNavigate } from "react-router-dom";
import { HeaderContainer, HomeButton, PokedexButton } from "./style";
import PokeLogo from "../../img/logo.png";
import { goToHome } from "../../Routes/coordinator";
import { IoIosArrowBack } from "react-icons/io";

function Pokedex() {
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
      Pokedex
    </div>
  );
}

export default Pokedex;
