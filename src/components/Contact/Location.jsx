import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  border: 1px solid black;
  background-color: grey;
  overflow: hidden;
`;
export default function Location() {
  return (
    <Wrapper>
      <h1>this is the location element</h1>
    </Wrapper>
  );
}
