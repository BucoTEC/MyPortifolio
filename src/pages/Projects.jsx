import React from "react";
import AnimatePage from "../utils/AnimatePage";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Front from "../components/Projects/Front";
import Back from "../components/Projects/Back";
import Full from "../components/Projects/Full";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
  
`;

const Nav = styled.div`
  position: absolute;
  top: 10vh;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
function Projects() {
  return (
    <>
      <Nav>
        <NavLink to="">front</NavLink>
        <NavLink to="back">back</NavLink>
        <NavLink to="full">full</NavLink>
      </Nav>
      <AnimatePage>
        <Outlet />
        <Wrapper>
          <Routes>
            <Route path="" active element={<Front />} />
            <Route path="back" element={<Back />} />
            <Route path="full" element={<Full />} />
          </Routes>
        </Wrapper>
      </AnimatePage>
    </>
  );
}

export default Projects;
