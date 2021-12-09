import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mainSvg from "../../assets/main.svg";
import { init } from "ityped";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #f8ffff;
  position: relative;
  overflow: hidden;
`;
//main floating widow
const DevDesc = styled.div`
  position: absolute;
  width: 19rem;
  height: 17rem;
  background-color: #bdd1ff;
  z-index: 3;
  margin: 0.5rem;
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 7px;
`;
//inside is text generator
const DevTextBox = styled.div`
  padding-left: 0.5rem;
  font-size: 1.7rem;
  height: 100%;
  width: calc(100% - 0.5rem);
  background-color: #263238;
  color: #92989b;
  .ityped-cursor {
    animation: blink 0.9s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  span {
    color: whitesmoke;
    font-weight: 400;
  }
  h1 {
    font-weight: 300;
  }
`;
//main svg
const MainImg = styled.img`
  z-index: 1;
  position: absolute;
  bottom: 0;
  margin-bottom: -80px;
  margin-left: -50px;
`;

function MainLanding() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1800,
      typeSpeed: 200,
      showCursor: true,
      strings: ["Web Apps", "Solutions"],
    });
  }, []);
  return (
    <>
      <Wrapper>
        <DevDesc>
          <DevTextBox>
            <h1>
              <span>Hi,</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;/&gt;
            </h1>
            <h1>
              im <span>Adnan</span>
            </h1>
            <h1>i build</h1>
            <h1>
              <span ref={textRef}></span>
            </h1>
          </DevTextBox>
        </DevDesc>
        <MainImg width={600} src={mainSvg} alt="Adnan coding" />
      </Wrapper>
    </>
  );
}

export default MainLanding;
