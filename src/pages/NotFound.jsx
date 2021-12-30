import React from "react";
import AnimatePage from "../utils/AnimatePage";
import styled from "styled-components";
import { phone, desktop } from "../utils/responsive";
import logo from "../assets/page404.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BottomNav from "../ui/BottomNav";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  min-height: 80vh;
  text-align: center;
  overflow: hidden;
  ${phone({
    width: "100%",
  })}

  h1 {
    margin: 1rem;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  img {
    width: 100%;
    display: block;
    margin: auto;
    max-height: 100%;
    overflow: hidden;

    ${desktop({
      height: "100%",
    })}
  }
`;
function NotFound() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AnimatePage>
      <Wrapper data-aos="animation_name">
        <ImgWrapper>
          <img src={logo} alt="" />
        </ImgWrapper>
        <BottomNav
          leftUrl={"/"}
          leftText={"Home"}
          rightUrl={"/contact"}
          rightText={"Contact me"}
        />
      </Wrapper>
    </AnimatePage>
  );
}

export default NotFound;
