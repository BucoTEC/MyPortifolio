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

const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  height: 90vh;
  text-align: center;
  overflow: hidden;
  ${phone({
    width: "100%",
  })}

  h1 {
    margin: 1rem;
    color: #59b1d6;
  }
`;

const LoadingSvg = styled.img`
  height: 90%;
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
  height: 80%;
`;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    Aos.init();
    const fetchProjects = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/?cat=${filter}`);
        setProjects(result.data);
      } catch (err) {
        return <h1>Something went wrong. {err.message}</h1>;
      }
    };
    setLoading(true);
    fetchProjects();
    setLoading(false);
  }, [filter]);
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <AnimatePage>
      <Wrapper data-aos="animation_name">
        <select onChange={filterHandler}>
          <option value="all">all</option>

          <option value="full">full</option>
          <option value="back">back</option>
          <option value="front">front</option>
        </select>
        {loading ? (
          <LoadingSvg src={LoadingIcon} />
        ) : (
          <ProjectsList>
            {projects.map((x) => (
              <li key={x._id}>{x.title}</li>
            ))}
          </ProjectsList>
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
