import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: white;

  /* max-width: 100%; */

  /* ${(props) => {
    switch (props.CurrentScreen) {
      case "home": {
        return "#home {background-color:white; :hover{cursor:auto;}}";
      }
      case "pokedex": {
        return "#pokedex {background-color:white; :hover{cursor:auto;}}";
      }
      default:
        return "#home {background-color:white; :hover{cursor:auto;}}";
    }
  }} */

  @media (max-width: 750px) {
    height: 100px;

    img {
      width: 150px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  color: white;
  background-color: #33a4f5;
  font-size: 20px;
  margin: 20px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    width: 60px;
    height: 40px;
    font-size: 13px;
  }
`;
