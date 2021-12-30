import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigatro from "./Navigator";
const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  height: 10vh;
  display: flex;
  overflow: hidden;

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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Wrapper data-aos="fade-up">
        <Left>
          <Navigatro to={props.leftUrl}>
            <h2>&lt; {props.leftText}</h2>
          </Navigatro>
        </Left>
        <Right>
          <Navigatro to={props.rightUrl}>
            <h2>{props.rightText} &gt;</h2>
          </Navigatro>
        </Right>
      </Wrapper>
    </>
  );
}

export default BottomNav;
