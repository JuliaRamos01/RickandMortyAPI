import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';
import Banner from '../src/assets/images/RMimg2.png';

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;}

  body{
  background-color: #1C1C1C;
  }
`;

const Bannerimg = styled.div`
  width: 100vw;

  img{
    width: 100vw;
    height: 80vh;
  }
`;

const Title = styled.h1`
  color: #71Ba1B;
  text-align: center;
  padding: 90px 0 60px 0;
`;

const Containercards = styled.div`
  width: 100vw;
  height: 50vh;
  display: grid;
  justify-content: center;
  padding: 0 0 40px 0;
  /* border: 3px pink solid; */
`;

const Cards = styled.div`
  width: 40vw;
  border: 1px solid #B0FC38;
  box-shadow: 2px 2px 4px #AEF359;
  text-align: center;
  align-items: center;
  position: relative;
img {
    width: 12vw;
    position: absolute;
    top: 15px;
    left: 28vh;
    border-radius: 100px;
  }
`; 

const Description = styled.h2`
  color: white;
  font-size: 18px;
  padding: 200px 0 0 0;

  h3 {
    font-weight: lighter;
    padding: 5px 0 0 0;
  }
`;

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

// state que recebe uma lista
class App extends Component {
  state = {
    informacoes: []
  };

  //chamada para pegar personangem
  componentDidMount() {
    this.PegarPersonagem();
  }

  PegarPersonagem = async () => {
    const resposta = await API.get();

    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      informacoes: itens
    });
  };

  render() {
    return (
      <>
        <GlobalStyle/>
        <Bannerimg>
          <img src={Banner} alt="Banner" />
        </Bannerimg>
          <Title>
            <h1>Rick and Morty API</h1>
          </Title>
          {this.state.informacoes.map((categoria) => (
              <Containercards>
                <Cards>
              <img src={categoria.image} alt={categoria.name} />
              <Description>
                <h2>{categoria.name}</h2>
                <h3>{categoria.species}</h3>
              </Description>
              </Cards>
              </Containercards>
          ))}
      </>
    );
  }
}

export default App;
