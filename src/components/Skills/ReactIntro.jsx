import React from "react";
import styled from "styled-components";
import { desktop } from "../../utils/responsive.js";
import ReactLogo from "../../assets/ReactLogo.svg";
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${desktop({
    flexDirection: "row",
  })}
`;

const Left = styled.div`
  flex: 1;
  height: 80%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
    transform: translatey(0px);
    animation: spin 20s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  ${desktop({
    justifyContent: "center",
    flex: "1.4",
  })}
  h1 {
    overflow: hidden;

    font-size: 6rem;
    font-weight: 300;
    ${desktop({
      fontSize: "7rem",
    })}
  }
  h2 {
    overflow: hidden;

    font-weight: 200;
    text-align: center;
    width: 70%;
    font-size: 2rem;
  }
`;
const Vertical = styled.div`
  width: 1px;
  background-color: black;
  height: 70%;
  display: none;
  ${desktop({
    display: "block",
  })}
`;
function ReactIntro() {
  return (
    <Wrapper>
      <Left>
        <img src={ReactLogo} alt="" />
      </Left>
      <Vertical />
      <Right>
        <h1>React</h1>
        <h2>A JavaScript library for building user interfaces</h2>
      </Right>
    </Wrapper>
  );
}

export default ReactIntro;
