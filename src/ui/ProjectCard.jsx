import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 20rem;
  height: 25rem;
  border: 1px solid grey;
  margin: 1.5rem 0;
  border-radius: 10px;
  transition: 0.7s all ease;
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

    transform: scale(1.1);
  }

  img {
    padding: 0.5rem;
    height: 50%;
  }

  h1 {
    border-top: 1px solid grey;
    padding-top: 1rem;
    color: black;
    font-weight: 300;
  }
`;
function ProjectCard(props) {
  return (
    <Container>
      <img src={props.img} alt="No img" />
      <div></div>
      <h1>{props.title}</h1>
    </Container>
  );
}

export default ProjectCard;
