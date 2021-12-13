import React from "react";
import styled from "styled-components";
const TopNav = styled.div`
  height: 10vh;
  width: 100vw;
  text-align: center;
  display: flex;
  &:hover #nastavak {
    opacity: 1;
    transform: translateX(0);
    #nastavakInner {
      opacity: 1;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  margin-left: 2rem;
  cursor: pointer;
  h1 {
    font-weight: 200;
    font-size: 3rem;
  }
  #glavni {
    margin: 0 0.5rem;
    transition: all 0.3s ease-in;
    z-index: 5;
  }
  #nastavak {
    position: absolute;
    opacity: 1;
    transform: translateX(-75%);
    transition: all 0.3s ease-in;
  }
  #nastavakInner {
    opacity: 0;
    transition: all 0.3s ease-in;
    margin-right: 0.5rem;
  }
`;
function TopBar() {
  return (
    <>
      <TopNav>
        <Left>
          <Logo>
            <h1>
              &lt;
              <span id="glavni">
                B
                <span id="nastavak">
                  {" "}
                  <span id="nastavakInner">tech</span>&gt;
                </span>
              </span>
            </h1>
          </Logo>
        </Left>
        <Right>
          <NavList>
            <li>Contact</li>
            <li>My Skills</li>
            <li>My projects</li>
            <li>About</li>
            <li>Support</li>
          </NavList>
        </Right>
      </TopNav>
    </>
  );
}

export default TopBar;
