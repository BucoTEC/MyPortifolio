import React from "react";
import AnimatePage from "../utils/AnimatePage";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BottomNav from "../ui/BottomNav";
import LoadingIcon from "../assets/loading.svg";
import axios from "axios";
import ProjectCard from "../ui/ProjectCard";
import ScrollToTop from "react-scroll-to-top";

const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  min-height: 90vh;
  text-align: center;
  overflow: hidden;
  ${phone({
    width: "100%",
  })}

  h1 {
    margin: 1rem;
    /* color: #59b1d6; */
    color: black;
  }
`;

const LoadingSvg = styled.img`
  height: 15rem;
  padding: 5rem;
  animation: spin 1s linear infinite;

  ${phone({
    height: "10rem",
  })}
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ProjectsList = styled.ul`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: show;
  margin-bottom: 2rem;
`;
const Filter = styled.div`
  min-height: 10vh;
  width: 100%;
`;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    Aos.init();
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `http://btech-solutions-projects-api.herokuapp.com/?cat=${filter}`
        );
        setLoading(false);
        setProjects(result.data);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchProjects();
  }, [filter]);
  const filterHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <AnimatePage>
      <Wrapper data-aos="animation-name">
        <ScrollToTop
          smooth={true}
          color="#407bff"
          top={1000}
          style={{ width: "4rem", height: "4rem" }}
        />
        <Filter>
          <select
            onChange={filterHandler}
            style={{ width: "150px", marginTop: "2rem" }}
          >
            <option value="all">All</option>
            <option value="full">Full-Stack</option>
            <option value="back">Backend</option>
            <option value="front">Frontend</option>
          </select>
        </Filter>

        {loading ? (
          <LoadingSvg src={LoadingIcon} />
        ) : (
          <>
            <ProjectsList>
              {projects.map((x) => (
                <ProjectCard
                  key={x._id}
                  title={x.title}
                  img={x.img}
                  url={x.url}
                  desc={x.desc}
                />
              ))}
            </ProjectsList>
          </>
        )}
        <BottomNav
          leftUrl={"/"}
          leftText={"Home"}
          rightUrl={"/contact"}
          rightText={"Contact me"}
        />
      </Wrapper>
    </AnimatePage>
  );
}

export default Projects;
