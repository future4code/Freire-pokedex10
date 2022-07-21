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
import Pokebola from './img/pokebola-bg.png'

export const PokemonCard = ({pokeInfos}) => {
  console.log(pokeInfos)

  const mappedPokemons = pokeInfos?.map((pokemon)=>{
    return (
      <Card pokemonTypes = {pokemon.types} key={pokemon.id}>
        <p>#0{pokemon.id}</p>
        <h1>{pokemon.name}</h1>
        {/* <img src={background} alt="" /> */}
        <PhotoContainer>
          <img className="pokebola" src={Pokebola}/>
          <img className="pokeimage" src={pokemon[`sprites`][`other`][`official-artwork`][`front_default`]} alt={pokemon.name} />
        </PhotoContainer>
        <ButtonDiv>
          <ButtonType pokemonTypes = {pokemon.types}>
            <img src={folha} alt="" /> <p>{pokemon.types[0].type.name}</p>
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
