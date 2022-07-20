import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: white;
  /* max-width: 100%; */
  min-width: 600px;

  button{
    margin: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  color: white;
  background-color: #33A4F5;
  font-size: 20px;
  margin: 20px;

  :hover{
    cursor: pointer;
  }
`