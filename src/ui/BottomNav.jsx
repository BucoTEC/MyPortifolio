import React from "react";
import styled from "styled-components";
import Navigatro from "./Navigator";
import { desktop } from "../utils/responsive";
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 10vh;
  display: flex;
  overflow: hidden;
  ${desktop({
    width: "70%",
  })}

  h2 {
    padding: 0.5rem;
    font-weight: 300;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function BottomNav(props) {
  return (
    <>
      <Wrapper>
        <Left>
          <Navigatro style={{ color: "#205DE2" }} to={props.leftUrl}>
            <h2>&lt; {props.leftText}</h2>
          </Navigatro>
        </Left>
        <Right>
          <Navigatro style={{ color: "#205DE2" }} to={props.rightUrl}>
            <h2>{props.rightText} &gt;</h2>
          </Navigatro>
        </Right>
      </Wrapper>
    </>
  );
}

export default BottomNav;
