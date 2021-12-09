import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  background-color: lightgray;
`;
function Footer() {
  return (
    <Wrapper>
      <p>Build by: Bucalovic</p>
    </Wrapper>
  );
}

export default Footer;
