import React, { useEffect } from "react";
import styled from "styled-components";
import laptop from "../../assets/laptop.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f8ffff;
  margin-bottom: 4rem;
`;

const MainText = styled.div`
  width: 100%;
  padding: 1rem;
  h1 {
    font-size: 3.8rem;
    font-weight: 400;
  }
  .higlight {
    color: #407bff;
  }
`;
const LaptopImg = styled.img`
  padding: 1rem;
  width: 68%;
  float: right;
`;
const SubText = styled.div`
  padding: 0rem 1rem;
  width: 100%;

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  h1 {
    color: #407bff;
    font-size: 2.5rem;
    font-weight: 500;
  }
  #gornji {
    margin-top: 0.5rem;
  }
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
  margin-top: 2rem;
  h1 {
    font-weight: 400;
    font-size: 1.7rem;
  }
`;
function SkllisIntro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <MainText>
        <h1 data-aos="fade-right">Precision</h1>
        <h1 data-aos="fade-right" className="higlight">
          Functionality
        </h1>
        <h1 data-aos="fade-right">Simplicity</h1>
      </MainText>
      <LaptopImg src={laptop} data-aos="fade-left" />
      <SubText>
        <h2>These are core values I implemetn</h2>
        <h2>in all of my projects. Im here to make</h2>
        <h1 id="gornji">Your problems </h1>
        <h1>disapear</h1>
      </SubText>
      <Button>
        <h1>My Skills</h1>
      </Button>
    </Wrapper>
  );
}

export default SkllisIntro;
