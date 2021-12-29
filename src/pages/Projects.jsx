import React from "react";
import AnimatePage from "../utils/AnimatePage";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import NotWorking from "../assets/workInProgres.svg";
// import { NavLink, Outlet, Route, Routes } from "react-router-dom";
// import Front from "../components/Projects/Front";
// import Back from "../components/Projects/Back";
// import Full from "../components/Projects/Full";
const Wrapper = styled.div`
  max-width: 30rem;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
  h1{
    text-align: center;
    margin: 1rem 0;
    color: #59B1D6;
  }
`;

// const Nav = styled.div`
//   position: absolute;
//   top: 10vh;
//   width: 100%;
//   height: 10vh;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;
const WorkInProgres = styled.img`
  width: 100%;
`;
function Projects() {
  return (
    <>
      {/* <Nav>
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
          </AnimatePage> */}
      <AnimatePage>
        <Wrapper>
          <h1>Work in progress</h1>
          <WorkInProgres src={NotWorking} />
        </Wrapper>
      </AnimatePage>
    </>
  );
}

export default Projects;
