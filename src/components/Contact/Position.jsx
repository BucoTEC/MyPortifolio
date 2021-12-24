import React from "react";
import styled from "styled-components";
import eu from "../../assets/smallEU.svg";
import { phone, desktop } from "../../utils/responsive";
const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  margin: 1rem;
  ${desktop({
    padding: "1.3rem",
  })}

  h1 {
    margin: 1rem 0rem;
    font-size: 7rem;
    font-weight: 300;
    color: #263238;
    ${phone({
      fontSize: "4.3rem",
    })}
    transition: all 0.3s ease-in;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      overflow: hidden;

      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
      color: #263238;
    }
    overflow-x: show;
  }
  h2 {
    font-size: 5rem;
    font-weight: 200;
    color: #407bff;
    ${phone({
      fontSize: "3rem",
    })}
    
`;
const MainImg = styled.img`
  width: 100%;
  height: 125%;
`;
export default function Position() {
  return (
    <Wrapper>
      <Text>
        <h1>
          <a
            href="https://www.google.com/maps/d/u/0/viewer?msa=0&ie=UTF8&t=m&ll=43.85631600000001%2C18.413086000000003&spn=0.23766%2C0.439453&z=11&source=embed&mid=1WqiijoA-ZFaNen2oDUktlr-9LEw"
            target="_blank"
            rel="noreferrer"
          >
            My location
          </a>
        </h1>
        <h2>utc +2</h2>
      </Text>
      <MainImg src={eu} />
    </Wrapper>
  );
}
