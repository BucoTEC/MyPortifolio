import React from "react";
import Svg404 from "../assets/page404.svg";
import styled from "styled-components";
import { phone } from "../utils/responsive";
const Wrapper = styled.div`
 max-width: 30rem;
 height: 80vh;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
`;
const WorkInProgres = styled.img`
  width: 100%;
`;
function NotFound() {
  return (
    <Wrapper>
      <WorkInProgres src={Svg404} />
    </Wrapper>
  );
}

export default NotFound;
