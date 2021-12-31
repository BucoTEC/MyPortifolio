import React, { useEffect } from "react";
import NodeLogo from "../../assets/NodeLogo.svg";
import styled from "styled-components";
import { desktop } from "../../utils/responsive";
import Aos from "aos";
import "aos/dist/aos.css";
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column-reverse;
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

    font-weight: 200;
    text-align: center;
    font-size: 2rem;

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
function Node() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Right data-aos="fade-right">
        <h1>Node.js</h1>
        <h2>JavaScript runtime built on Chrome's V8 JavaScript engine.</h2>
      </Right>
      <Vertical />
      <Left data-aos="fade-left">
        <img src={NodeLogo} alt="" />
      </Left>
    </Wrapper>
  );
}

export default Node;
