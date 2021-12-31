import React from "react";
import styled from "styled-components";
import { desktop } from "../../utils/responsive.js";
import MongoLogo from "../../assets/Mongo.svg";
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
    animation: float 3s ease-in-out infinite;
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
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
    font-size: 5rem;
    font-weight: 300;
    ${desktop({
      fontSize: "7rem",
    })}
  }
  h2 {
    overflow: hidden;

    font-size: 2rem;
    font-weight: 200;
    text-align: center;
    width: 90%;
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
function Mongo() {
  return (
    <Wrapper>
      <Left>
        <img src={MongoLogo} alt="" />
      </Left>
      <Vertical />
      <Right>
        <h1>MongoDB</h1>
        <h2>
          Document database with the scalability and flexibility that you want
        </h2>
      </Right>
    </Wrapper>
  );
}

export default Mongo;
