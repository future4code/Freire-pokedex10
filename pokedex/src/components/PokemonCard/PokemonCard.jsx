import {
  Card,
  PhotoContainer,
  Background,
  ButtonType,
  DetalhesContainer,
  ButtonDiv,
} from "./styles";
import bulbasaur from "./img/bulbasaur.png";
import background from "../../components/PokemonCard/img/pokebola-bg.png";
import folha from "./img/folha.png";

export const PokemonCard = () => {
  return (
    <div>
      <Card>
        <p>#01</p>
        <h1>Bulbasaur</h1>
        {/* <img src={background} alt="" /> */}
        <PhotoContainer>
          <img src={bulbasaur} alt="" />
        </PhotoContainer>
        <ButtonDiv>
          <ButtonType>
            {" "}
            <img src={folha} alt="" /> Grass{" "}
          </ButtonType>
          <ButtonType>
            {" "}
            <img src={folha} alt="" /> Grass{" "}
          </ButtonType>
        </ButtonDiv>
        <DetalhesContainer>
          <p>Detalhes</p> <button>Excluir</button>
        </DetalhesContainer>
      </Card>
    </div>
  );
};
