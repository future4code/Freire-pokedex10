import React, {useState} from 'react'
import PokeLogo from '../../img/logo.png'
import { HeaderContainer } from './style'
import { Button } from './style'

export default function Header() {

  const [screen, setScreen] = useState("/");

    // getHeaderPage = () => {
    //   switch(){
    //     case "":
    //       return 
    //   }
    // }

    console.log(window.location.pathname)

  return (
    <HeaderContainer>
      <button></button>
      <img src={PokeLogo}></img>
      <Button>Pokédex</Button>
    </HeaderContainer>
  )
}
