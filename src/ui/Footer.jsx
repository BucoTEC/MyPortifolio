import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #d3d3d38f;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 3rem;

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: #5a5656;
  }
  #mali {
    font-size: 1rem;
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
        <p>+387 62 006 212</p>
        <p id="mali">adnan.bucalovic13@gmail.com</p>
      </BasicLogo>
    </Wrapper>
  );
}

export default Footer;
