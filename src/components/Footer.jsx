import React from "react";
import styled from "styled-components";

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
function Footer() {
  return (
    <Wrapper>
      <p>Built by: Bucalovic</p>
    </Wrapper>
  );
}

export default Footer;
