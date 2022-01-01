import React from "react";
import styled from "styled-components";
import MernBig from "../../assets/MernBig.svg";
import MernSmall from "../../assets/MernSmall.svg";
import { desktop } from "../../utils/responsive.js";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SmallImg = styled.img`
  overflow: hidden;
  height: 100%;
  width: 100%;
  ${desktop({
    display: "none",
  })}
`;
const BigImg = styled.img`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: none;
  ${desktop({
    display: "block",
  })}
`;
function Main() {
  return (
    <Wrapper>
      <SmallImg src={MernSmall} alt="" />
      <BigImg src={MernBig} />
    </Wrapper>
  );
}
export default Main;
