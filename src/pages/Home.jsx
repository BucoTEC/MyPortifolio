import React from "react";
import ContactIntro from "../components/Home/ContactIntro";
import MainLanding from "../components/Home/MainLanding";
import ProjectsIntro from "../components/Home/ProjectsIntro";
import SkllisIntro from "../components/Home/SkllisIntro";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import TopPosition from "../utils/TopPosition";
import { phone } from "../utils/responsive";
import AnimatePage from "../utils/AnimatePage";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  ${phone({
    width: "100%",
  })}
`;
function Home() {
  return (
    <>
      <AnimatePage>
        <TopPosition />
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
      </AnimatePage>
    </>
  );
}

export default Home;
