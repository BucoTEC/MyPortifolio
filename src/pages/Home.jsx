import React from "react";
import ContactIntro from "../components/Home/ContactIntro";
import MainLanding from "../components/Home/MainLanding";
import ProjectsIntro from "../components/Home/ProjectsIntro";
import SkllisIntro from "../components/Home/SkllisIntro";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
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

      <Footer />
    </>
  );
}

export default Home;
