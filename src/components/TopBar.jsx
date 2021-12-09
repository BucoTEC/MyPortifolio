import React from "react";
import styled from "styled-components";
const TopNav = styled.div`
  height: 10vh;
  width: 100vw;
  text-align: center;
`;
function TopBar() {
  return (
    <>
      <TopNav>
        <h1>Nav-traka</h1>
      </TopNav>
    </>
  );
}

export default TopBar;
