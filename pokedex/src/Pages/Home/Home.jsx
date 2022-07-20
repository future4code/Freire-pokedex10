import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

function Home() {
  const [pokemons, setPokemons] = useState([])
  // const [names, setNames] = useState([]) 
  const [details, setDetails]= useState([])

      
  useEffect(()=>{
  
   getAllPokemons()
  // getDetails()
  },[] 
)

const getAllPokemons = () =>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then((response)=>{

    setPokemons(response.data.results)
    console.log(response.data.results)
    console.log('poke', pokemons)
    alert('SUCESSO')
  })
    .catch((error)=>{
      console.log(error)
      alert('erro')
    
  })

}
const names = pokemons.filter((item) => {
  return  item.name
})


const getDetails = () =>{
console.log('poke',pokemons)
  names.map((item)=>{
  return(
  axios.get(`https://pokeapi.co/api/v2/pokemon/${item}/`)
      .then((response)=>{
     
       setDetails([... details, response.data])
        console.log(response.data)
        console.log('detalhes', details)  
      
      })
        .catch((error)=>{
          console.log(error)
         
      })
  )
    
 
  })
}
// let id
// const getOnePokemon = () =>{
//   for(let i=1; i< 21; i++){
//     // id = i;
   
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//     .then((response)=>{
//       console.log(i)
//     //  setPokemons([..., response.data])
//       console.log(response.data)
//       const lista = [...names,  response.data.name]
//       setNames(lista)
//       //  names.push(response.data.name)
//       //  num.push(response.data.id)
//       console.log(names, num)
      
    
//     })
//       .catch((error)=>{
//         console.log(error)
//         alert('erro')
      
//     })
//   }
  
// }

const listCards = names.map((item)=>{
  return <PokemonCard nome= {item}></PokemonCard>
})

  return (
    
    <div>
   
    {listCards} 
  
    </div>
  )
}

export default Home