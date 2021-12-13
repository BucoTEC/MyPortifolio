import React, { useEffect } from "react";
import styled from "styled-components";
import oneDevSvg from "../../assets/oneDev.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { desktop, tablet } from "../../utils/responsive.js";
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f8ffff;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  flex: 5;
  width: 100%;
  overflow: hidden;
  ${desktop({
    display: "flex",
  })}
`;
const Bottom = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${desktop({
    padding: "2rem",
  })}
`;
const Button = styled.div`
  color: whitesmoke;
  background-color: #407bff;
  width: 20rem;
  border-radius: 50px;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all 0.3s ease-in;

  h1 {
    font-weight: 400;
    font-size: 1.7rem;
    transition: all 0.3s ease-in;
    ${tablet({
      fontSize: "2rem",
    })}
  }
  &:hover {
    background-color: #467cf3;
    transform: scale(1.1);
    box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    h1 {
      transform: scale(1.1);
    }
  }
  ${desktop({
    marginTop: ".5rem",
  })}
  ${tablet({
    width: "30rem",
    height: "6rem",
  })}
`;
const MainText = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  h1 {
    font-size: 3.8rem;
    font-weight: 400;
    ${desktop({
      fontSize: "6rem",
    })}
    ${tablet({
      fontSize: "5rem",
    })}
  }
  .higlight {
    color: #407bff;
    /* font-weight: 500; */
  }
  ${desktop({
    flex: 1,
  })}
`;
const MainImg = styled.div`
  overflow: hidden;
  ${desktop({
    flex: 1,
  })}
`;
const DevImg = styled.img`
  height: 40rem;
  margin-top: -11rem;
  margin-left: -3rem;

  ${tablet({
    height: "70rem",
    marginLeft: "2rem",
  })}
  ${desktop({
    height: "50rem",
    marginLeft: 0,
  })}
`;

function ContactIntro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Top>
        <MainText>
          <h1>Have any</h1>
          <h1>questios ?</h1>
          <h1 data-aos="fade-right" className="higlight">
            Fell free to
          </h1>
          <h1 data-aos="fade-right" className="higlight">
            ask
          </h1>
        </MainText>
        <MainImg>
          <DevImg src={oneDevSvg} data-aos="fade-left" />
        </MainImg>
      </Top>
      <Bottom>
        <Button>
          <h1>Contact me</h1>
        </Button>
      </Bottom>
    </Wrapper>
  );
}

export default ContactIntro;
