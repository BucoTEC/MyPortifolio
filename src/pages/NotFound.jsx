import React from "react";
import AnimatePage from "../utils/AnimatePage";
import styled from "styled-components";
import { phone } from "../utils/responsive";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
`;
function NotFound() {
  return (
    <AnimatePage>
      <Wrapper>
        <h1>404 not found</h1>
      </Wrapper>
    </AnimatePage>
  );
}

export default NotFound;
