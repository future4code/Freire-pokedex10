import {
  Card,
  PhotoContainer,
  Background,
  ButtonType,
  DetalhesContainer,
  ButtonDiv,
  CardContainer,
} from "./styles";
import bulbasaur from "./img/bulbasaur.png";
import background from "../../components/PokemonCard/img/pokebola-bg.png";
import folha from "./img/folha.png";
import Pokebola from "./img/pokebola-bg.png";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/Coordinator";
import { useContext } from "react";
import { ContextPokemon } from "../../ContextPokemon";

export const PokemonCard = () => {
  const navigate = useNavigate();
  const { pokeInfos, setPokeId } = useContext(ContextPokemon);

  const onClickDetails = (id) => {
    setPokeId(id);
    goToDetails(navigate);
  };

  const mappedPokemons = pokeInfos?.map((pokemon) => {
    return (
      <Card pokemonTypes={pokemon.types} key={pokemon.id}>
        <p>#0{pokemon.id}</p>
        <h1>{pokemon.name}</h1>
        {/* <img src={background} alt="" /> */}
        <PhotoContainer>
          <img className="pokebola" src={Pokebola} />
          <img
            className="pokeimage"
            src={
              pokemon[`sprites`][`other`][`official-artwork`][`front_default`]
            }
            alt={pokemon.name}
          />
        </PhotoContainer>
        <ButtonDiv>
          {pokemon.types &&
            pokemon.types.map((type) => {
              return (
                <ButtonType pokemonTypes={type.type.name}>
                  <img src={folha} alt="" /> <p>{type.type.name}</p>
                </ButtonType>
              );
            })}
        </ButtonDiv>
        <DetalhesContainer>
          <p onClick={() => onClickDetails(pokemon.id)}>Detalhes</p>
          <button>Capturar!</button>
        </DetalhesContainer>
      </Card>
    );
  });

  return <CardContainer>{mappedPokemons}</CardContainer>;
};
