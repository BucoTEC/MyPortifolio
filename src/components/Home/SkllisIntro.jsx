import React, { useEffect } from "react";
import styled from "styled-components";
import laptop from "../../assets/laptop.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { desktop, tablet } from "../../utils/responsive.js";
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f8ffff;
  margin-bottom: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${desktop({
    height: "100vh",
  })}
`;

const MainText = styled.div`
  width: 100%;
  padding: 1rem;
  h1 {
    font-size: 3.8rem;
    font-weight: 400;
    ${desktop({
      fontSize: "5rem",
    })}
    ${tablet({
      fontSize: "4.5rem",
    })}
  }
  .higlight {
    color: #407bff;
  }
`;
const LaptopImg = styled.img`
  padding: 1rem;
  width: 68%;
  float: right;
  ${desktop({
    width: "100%",
  })}
`;
const SubText = styled.div`
  padding: 0rem 1rem;
  width: 100%;
  ${desktop({
    padding: "3rem",
    overflow: "hidden",
    paddingLeft: "5rem",
  })}
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    ${desktop({
      fontSize: "2.3rem",
    })}
    ${tablet({
      fontSize: "1.8rem",
    })}
  }
  h1 {
    color: #407bff;
    font-size: 2.5rem;
    font-weight: 500;
    ${desktop({
      fontSize: "3rem",
      fontWeight: 400,
    })}
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
  transition: all 0.3s ease-in;
  cursor: pointer;

  h1 {
    font-weight: 400;
    font-size: 1.7rem;
    overflow: hidden;
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
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "2rem",
    marginRight: "10rem",
  })}
  ${tablet({
    width: "30rem",
    height: "6rem",
    marginTop: "1.2rem",
  })}
`;
const Top = styled.div`
  width: 100%;
  overflow: hidden;
  ${desktop({
    flex: "1",
    display: "flex",
  })}
`;
const Bottom = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  ${desktop({
    flex: "1",
  })}
`;
function SkllisIntro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Top>
        <MainText>
          <h1 data-aos="fade-right">Precision</h1>
          <h1 data-aos="fade-right" className="higlight">
            Functionality
          </h1>
          <h1 data-aos="fade-right">Simplicity</h1>
        </MainText>
        <LaptopImg src={laptop} data-aos="fade-left" />
      </Top>
      <Bottom>
        <SubText>
          <h2>These are core values I implemetn</h2>
          <h2>in all of my projects. Im here to make</h2>
          <h1 id="gornji">Your problems </h1>
          <h1>disapear</h1>
        </SubText>
        <Button>
          <h1>My Skills</h1>
        </Button>
      </Bottom>
    </Wrapper>
  );
}

export default SkllisIntro;
