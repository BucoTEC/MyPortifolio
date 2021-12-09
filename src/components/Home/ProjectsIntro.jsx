import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import cloudSvg from "../../assets/cloud.svg";
import { init } from "ityped";

const Wrapper = styled.div`
  background-color: #f8ffff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  width: 100%;
`;

const Bottom = styled.div`
  flex: 1;
  width: 100%;
`;

const MainText = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  h1 {
    font-size: 3.8rem;
    font-weight: 400;
  }
  .higlight {
    color: #407bff;
    /* font-weight: 500; */
  }
`;
const MainImg = styled.div`
  overflow: hidden;
  width: 100%;
  flex: 1;
  padding-left: 1rem;
`;

const CloudImg = styled.img`
  height: 100%;
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
const InfoText = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  margin: 1rem 0;

  span {
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
function ProjectsIntro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      //   backSpeed: 10,
      backDelay: 1800,
      //   typeSpeed: 10,
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
          <h1 className="higlight">The internet</h1>
        </MainText>
        <MainImg>
          <CloudImg src={cloudSvg} />
        </MainImg>
      </Top>
      <Bottom>
        <InfoText>
          <span ref={textRef}></span>
        </InfoText>
        <Button>
          <h1>My projects</h1>
        </Button>
      </Bottom>
    </Wrapper>
  );
}

export default ProjectsIntro;
