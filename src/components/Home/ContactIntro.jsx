import React from "react";
import styled from "styled-components";
import oneDevSvg from "../../assets/oneDev.svg";
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
`;
const Bottom = styled.div`
  flex: 1;
  width: 100%;
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
`;
const DevImg = styled.img`
  height: 40rem;
  margin-top: -11rem;
  margin-left: -3rem;
`;
function ContactIntro() {
  return (
    <Wrapper>
      <Top>
        <MainText>
          <h1>Have any</h1>
          <h1>questios ?</h1>
          <h1 className="higlight">Fell free to</h1>
          <h1 className="higlight">ask</h1>
        </MainText>
        <MainImg>
          <DevImg src={oneDevSvg} />
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
