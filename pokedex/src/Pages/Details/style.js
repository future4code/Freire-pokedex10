import styled from "styled-components";

export const Content = styled.div`
  color: white;

  h1 {
    max-width: 200px;
    margin-left: 30px;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: 650px) {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const ContentArea = styled.div`
  position: relative;
  height: 0px;
  padding: 0px 0px 47.72%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Card = styled.div`
  position: Absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #729f92;
  margin-bottom: 50px;
  border-radius: 2vw;

  #front {
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 50%;
    top: 4%;
    left: 2%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    border-radius: 1vw;

    img {
      width: 100%;
      border-radius: 1vw;
    }
  }

  #back {
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 4%;
    top: 50%;
    left: 2%;
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-radius: 1vw;

    img {
      width: 100%;
      border-radius: 1vw;
    }
  }

  #stats {
    background-color: white;
    width: 25%;
    position: absolute;
    left: 24%;
    top: 4%;
    bottom: 4%;
    border-radius: 1vw;

    img {
      width: 100%;
      border-radius: 1vw;
    }
  }

  #title {
    width: 20%;
    position: absolute;
    bottom: 80%;
    top: 4%;
    left: 53%;
    background-color: white;
    border-radius: 1vw;
  }

  #moves {
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 4%;
    top: 27%;
    left: 52%;
    border-radius: 1.3vw;
  }

  #image {
    width: 25%;
    position: absolute;
    bottom: 80%;
    top: -22%;
    left: 74%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: white;
  min-width: 350px;

  @media (max-width: 820px) {
    height: 100px;

    img {
      width: 150px;
    }
  }
`;

export const PokedexButton = styled.button`
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

  @media (max-width: 820px) {
    width: 60px;
    height: 40px;
    font-size: 13px;
  }
`;

export const HomeButton = styled.div`
  margin-left: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  line-height: 20px;
  margin-right: 5px;

  span {
    margin-left: 5px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    font-size: 12px;
  }
`;
