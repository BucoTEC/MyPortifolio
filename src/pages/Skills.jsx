import React from "react";
import styled from "styled-components";
import TopPosition from "../utils/TopPosition";
import { phone } from "../utils/responsive";
import Main from "../components/Skills/Main";
import Mongo from "../components/Skills/Mongo";
import Express from "../components/Skills/Express";
import ReactIntro from "../components/Skills/ReactIntro";
import Node from "../components/Skills/Node";
import ScrollToTop from "react-scroll-to-top";

const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
`;
function Skills() {
  return (
    <Wrapper>
      <TopPosition />
      <ScrollToTop
        smooth={true}
        color="#407bff"
        top={1000}
        style={{ width: "4rem", height: "4rem" }}
      />
      <Main />
      <Mongo />
      <Express />
      <ReactIntro />
      <Node />
    </Wrapper>
  );
}

export default Skills;
