import React from "react";
import ContactIntro from "../components/Home/ContactIntro";
import MainLanding from "../components/Home/MainLanding";
import ProjectsIntro from "../components/Home/ProjectsIntro";
import SkllisIntro from "../components/Home/SkllisIntro";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  @media only screen and (max-width: 380px) {
    & {
      width: 100%;
    }
  }
`;
function Home() {
  return (
    <Wrapper>
      <ScrollToTop
        smooth={true}
        color="#407bff"
        top={1000}
        style={{ width: "4rem", height: "4rem" }}
      />

      <MainLanding />
      <SkllisIntro />
      <ProjectsIntro />
      <ContactIntro />
    </Wrapper>
  );
}

export default Home;
