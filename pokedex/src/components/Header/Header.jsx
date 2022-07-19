import React from 'react'
import PokeLogo from '../../img/logo.png'
import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
        <img src={PokeLogo}></img>
    </HeaderContainer>
  )
}
