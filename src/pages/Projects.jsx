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
  height: 20rem;
  animation: spin 1s linear infinite;
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

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    Aos.init({ duration: 2000 });

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await axios.get(
          `http://btech-solutions-projects-api.herokuapp.com/?cat=${filter}`
        );
        setProjects(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return <h1>Something went wrong. {err.message}</h1>;
      }
    };
    fetchProjects();
  }, [filter]);
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <AnimatePage>
      <Wrapper>
        <select onChange={filterHandler}>
          <option value="all">all</option>

          <option value="full">full</option>
          <option value="back">back</option>
          <option value="front">front</option>
        </select>
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
                  data-aos="fade-up"
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
