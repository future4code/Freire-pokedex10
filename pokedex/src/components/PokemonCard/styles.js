
import styled from 'styled-components';
import background from './img/pokebola-bg.png'
// import {changeColor} from './PokemonCard'

// export const Card = styled.div`
// color: white;
// width: 420px;
// height: 180px;
// margin: 90px;
// /* background-color: {changeColor}; */
// border-radius: 12px;
// padding: 20px;
// & h1{
//     font-family: sans-serif;
// font-style: normal;
// font-weight: 700;
// font-size: 32px;
// line-height: 39px;
// margin-top: -20px;
// }
// & p{
//     font-family: sans-serif;
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 19px;

// }
/* & img
{
    position: absolute;

  z-index: -1;
transform: rotate(30deg);
opacity: 0.17;
}
 */


export const PhotoContainer = styled.div `
margin-left: 250px;
margin-top: -150px;
width: 193px;
height: 193px;
`


export const  ButtonType = styled.button`

padding: 5px 8px;
margin: 5px;

width: 91px;
height: 31px;
background: #70B873;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
& img{
    width: 17px;
height: 19px;
}
`

export const ButtonDiv = styled.div`
display: flex; 
width: 200px;
margin-top: -60px;

`

export const DetalhesContainer = styled.div`
display: flex;
margin-top: 20px;
justify-content: space-between;
align-items: center;
padding: 0px;

& p{
    width: 74px;
height: 24px;

font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;
}
& button {
    /* display: flex;
flex-direction: row;
justify-content: center; */
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;
color: white;
border-style: none;
background: #FF6262;
border-radius: 8px;
}

`