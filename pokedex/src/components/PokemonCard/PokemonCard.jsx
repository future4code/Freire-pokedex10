import {
  Card,
  PhotoContainer,
  Background,
  ButtonType,
  DetalhesContainer,
  ButtonDiv,
  CardContainer
} from "./styles";
import bulbasaur from "./img/bulbasaur.png";
import background from "../../components/PokemonCard/img/pokebola-bg.png";
import folha from "./img/folha.png";

export const PokemonCard = ({pokeInfos}) => {
  console.log(pokeInfos)

  const mappedPokemons = pokeInfos?.map((pokemon)=>{
    return (
      <Card key={pokemon.id}>
        <p>#0{pokemon.id}</p>
        <h1>{pokemon.name}</h1>
        {/* <img src={background} alt="" /> */}
        <PhotoContainer>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
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
          <p>Detalhes</p> <button>Capturar!</button>
        </DetalhesContainer>
      </Card>
    )
  })

  return (
    <CardContainer>
      {mappedPokemons}
    </CardContainer>
  );
};
