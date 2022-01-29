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
const Filter = styled.div`
  min-height: 10vh;
  width: 100%;
`;

// const FilterOption = styled.select`
//   margin: 1rem;
//   background-color: #407bff;
//   color: white;
//   padding: 12px;
//   width: 190px;
//   border: none;
//   font-size: 20px;
//   box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
//   -webkit-appearance: button;
//   appearance: button;
//   outline: none;
// `;

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await axios.get(
          `http://btech-solutions-projects-api.herokuapp.com/?cat=all`
        );
        setLoading(false);
        setProjects(result.data);
      } catch (err) {
        setLoading(false);
        return <h1>Something went wrong. {err.message}</h1>;
      }
    };
    fetchProjects();
  }, []);
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  return (
    <AnimatePage>
      <Wrapper data-aos="animation-name">
        {/* <Filter>
          <select onChange={filterHandler} className="box">
            <option value="all">All</option>
            <option value="full">Full</option>
            <option value="back">Back</option>
            <option value="front">Front</option>
          </select>
        </Filter> */}

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
                />
              ))}
            </ProjectsList>
            <h1>{projects[0]?.title}</h1>
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
