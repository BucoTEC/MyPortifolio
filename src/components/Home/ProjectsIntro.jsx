import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import cloudSvg from "../../assets/cloud.svg";
import { init } from "ityped";
import Aos from "aos";
import "aos/dist/aos.css";
import { desktop, tablet, phone } from "../../utils/responsive";
import Navigatro from "../../ui/Navigator";
const Wrapper = styled.div`
  background-color: #f8ffff;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  ${desktop({
    marginTop: "7rem",
    height: "100vh",
  })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  width: 100%;
  ${desktop({
    flexDirection: "row",
  })}
`;

const Bottom = styled.div`
  flex: 1;
  width: 100%;
  ${desktop({
    display: "flex",
    flexDirection: "row-reverse",
  })}
`;

const MainText = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  overflow: hidden;
  h1 {
    font-size: 3.8rem;
    font-weight: 400;
    ${desktop({
      fontSize: "5rem",
    })}
    ${tablet({
      fontSize: "5rem",
    })}
  }
  .higlight {
    color: #407bff;
  }
`;
const MainImg = styled.div`
  overflow: hidden;
  width: 90%;
  flex: 1;
  padding-left: 1rem;
`;

const CloudImg = styled.img`
  height: 100%;
  max-height: 30rem;
  ${desktop({
    height: "80%",
    marginLeft: "3rem",
  })};
  ${phone({
    height: "15rem",
  })}
  ${tablet({
    height: "25rem",
  })}
`;
const ButtonContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 1.5rem;
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
  ${tablet({
    width: "30rem",
    height: "6rem",
  })}
`;

const InfoText = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  margin: 1rem 0;
  overflow: hidden;
  flex: 1;
  span {
    font-size: 2.5rem;
    font-weight: 500;
  }
  ${phone({
    height: "9rem",
  })}
  ${tablet({
    height: "6rem",
  })}
`;
function ProjectsIntro() {
  const textRef = useRef();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1800,
      showCursor: false,
      strings: [
        "7.9 Million Online Retailers in the world",
        " 730  billion USD being spent online each year",
        " 4.66 billion active internet users worldwide",
      ],
    });
  }, []);

  return (
    <Wrapper>
      <Top>
        <MainText>
          <h1>The future</h1>
          <h1>is on</h1>
          <h1 className="higlight" data-aos="fade-up">
            The internet
          </h1>
        </MainText>
        <MainImg>
          <CloudImg src={cloudSvg} data-aos="fade-up" />
        </MainImg>
      </Top>
      <Bottom>
        <InfoText>
          <span ref={textRef}></span>
        </InfoText>
        <ButtonContainer>
          <Navigatro to="/projects">
            <Button>
              <h1>My projects</h1>
            </Button>
          </Navigatro>
        </ButtonContainer>
      </Bottom>
    </Wrapper>
  );
}

export default ProjectsIntro;
