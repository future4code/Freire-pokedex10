import { PhotoContainer, Background, ButtonType, DetalhesContainer, ButtonDiv} from './styles'
import bulbasaur from './img/bulbasaur.png'
import background from '../../components/PokemonCard/img/pokebola-bg.png'
import folha from './img/folha.png'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';


const Card = styled.div`
color: white;
width: 420px;
height: 180px;
margin: 90px;
background-color: #729F92;
/* ${(props) => props.color};   */
border-radius: 12px;
padding: 20px;

& h1{
    font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
margin-top: -20px;
}
& p{
    font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

}
`
export const PokemonCard =(props)=>{
  // const [pokemons, setPokemons] = useState([])
      
  // useEffect(()=>{
  //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  //     .then((response)=>{

  //       // names.map((item)=>{
  //       //   console.log(response.data.results.name)
  //       // })
  //       setPokemons(response.data.results)
  //       console.log(response.data.results)
  //       alert('SUCESSO')
  //     })
  //       .catch((error)=>{
  //         console.log(error)
  //         alert('erro')
        
  //     })
  //   },[] 
  // )

  // const names = pokemons.map((item)=>{
  //   return <h1>{item.name}</h1>
  // })
    // const [color, setColor] = useState('')
    // const [type, setType] = useState('')

    // setType('Bug');

    //  const changeColor = () =>{
    //     switch (type){
    //         case 'Water':
    //         //     return 'type-water'
    //         //     break
    //         // case 'Bug':
    //         //     return 'type-bug'
    //         //     break
    //         // case 'Fire':
    //         //     return 'type-fire'
    //         //     break
    //         // default: 
    //         //  return 'type-water'
    //           return  color='#71C3FF';
    //         break;

    //         case 'Fire':
    //             return color='#EAAB7D';
    //             break;
            
    //         case 'Bug':
    //             return color='#76A866'
    //             break;
                  
    //         case 'Grass':
    //             return color='#729F92'
    //             break;

    //         case 'Normal':
    //             return color='#BF9762'

    //         break;

    //         default:  
    //         return color='#D60F60'
            
    //     }
    // }
    // {console.log(color, type)}
    
    return (
      <div>
          <Card >
    <p>#01</p>
      <h1>{props.nome}</h1>
    {/* <img src={background} alt="" /> */}
    <PhotoContainer>
    <img src={bulbasaur} alt="" />
    </PhotoContainer>
    <ButtonDiv>
    <ButtonType> <img src={folha} alt="" /> Grass </ButtonType>
    <ButtonType> <img src={folha} alt="" /> Grass </ButtonType>
    </ButtonDiv>
    <DetalhesContainer>
      <p>Detalhes</p> <button>Excluir</button>
    </DetalhesContainer>
    </Card>
    </div>
    )
}