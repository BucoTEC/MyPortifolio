import React from "react";
import styled from "styled-components";
import Navigatro from "../ui/Navigator";
const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  background-color: lightgray;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4rem;

  p {
    margin-left: 0.7rem;
    font-size: 2rem;
    font-weight: 300;
    color: #5a5656;
  }
  overflow: hidden;
`;
const BasicLogo = styled.div`
  display: block;
  margin-left: 2rem;
  cursor: pointer;
  h1 {
    font-weight: 200;
    font-size: 3rem;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <BasicLogo>
        <Navigatro to="/">
          <h1>&lt; B &gt;</h1>
        </Navigatro>
      </BasicLogo>
    </Wrapper>
  );
}

export default Footer;
