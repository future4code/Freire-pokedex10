
import styled from 'styled-components';
import background from './img/pokebola-bg.png'

export const PokemonCard = styled.div`
position: absolute;
width: 440px;
height: 210px;
left: 0px;
top: 0px;

background: #729F92;
border-radius: 12px;


`

export const PhotoContainer = styled.div `
position: absolute;
width: 210.73px;
height: 210.73px;
left: 294.37px;
top: -62px;

background: {background};
opacity: 0.17;
transform: rotate(30deg);

& img{
    
position: absolute;
width: 193px;
height: 193px;
left: 274px;
top: 295px;
}
`

export const  ButtonType = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 91px;
height: 31px;
left: 129px;
top: 89px;

background: #70B873;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
& img{
    width: 17px;
height: 19px;

background: #FFFFFF;
}
`

export const DetalhesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 135px;
& p{
    width: 74px;
height: 24px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;
& button {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;

background: #FF6262;
border-radius: 8px;
}
}
`