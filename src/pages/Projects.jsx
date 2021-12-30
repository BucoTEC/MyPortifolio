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
function Projects() {
  return (
    <AnimatePage>
      <Wrapper>
        <h1>projects page</h1>
      </Wrapper>
    </AnimatePage>
  );
}

export default Projects;
