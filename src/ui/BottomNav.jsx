import React, { useEffect } from "react";
import styled from "styled-components";
import Navigatro from "./Navigator";
import { desktop } from "../utils/responsive";
import Aos from "aos";
import "aos/dist/aos.css";
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
  overflow: hidden;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
function BottomNav(props) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Wrapper>
        <Left>
          <Navigatro
            style={{ color: "#205DE2" }}
            to={props.leftUrl}
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <h2>&lt; {props.leftText}</h2>
          </Navigatro>
        </Left>
        <Right>
          <Navigatro
            style={{ color: "#205DE2" }}
            to={props.rightUrl}
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <h2>{props.rightText} &gt;</h2>
          </Navigatro>
        </Right>
      </Wrapper>
    </>
  );
}

export default BottomNav;
