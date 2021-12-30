import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigatro from "./Navigator";
import { desktop, tablet } from "../utils/responsive.js";
import CustomLink from "./CustomLink";
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
  overflow: hidden;
`;
const Right = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: end;
  overflow: hidden;

  ${desktop({
    alignItems: "center",
    justifyContent: "start",
  })}
`;
const NavList = styled.ul`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  display: none;
  font-size: 1.2rem;
  font-weight: 300;
  ${desktop({
    display: "flex",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const Hamburger = styled.div`
  margin-right: 3rem;
  width: 3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
  span {
    width: 100%;
    height: 2px;
    background-color: black;
    transform-origin: left;
    transition: all 1.5s ease;
  }
  #prva {
    transform: rotate(${(props) => props.isOpen && "45deg"});
  }
  #druga {
    opacity: ${(props) => props.isOpen && 0};
  }
  #treca {
    transform: rotate(${(props) => props.isOpen && "-45deg"});
  }
  ${desktop({
    display: "none",
  })}
  ${tablet({
    marginLeft: "17rem",
  })}
`;

const Logo = styled.div`
  display: none;
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
  ${desktop({
    display: "block",
  })}
`;
const BasicLogo = styled.div`
  display: block;
  margin-left: 2rem;
  cursor: pointer;
  h1 {
    font-weight: 200;
    font-size: 3rem;
  }
  ${desktop({
    display: "none",
  })}
`;

const SideMenu = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  margin-top: 10vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.6);
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: all 1s ease;

  li {
    font-size: 3rem;
    margin: 2rem;
    font-weight: 250;
  }
  ${desktop({
    display: "none",
  })}
`;

const SideLinks = styled.div`
  position: absolute;
  z-index: 99999;
`;
const Support = styled.a`
  text-decoration: none;
  color: white;
  background-color: #407bff;
  border-radius: 25px;
  margin: 1rem;
  margin-right: 2rem;
  width: 10rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  display: none;
  cursor: pointer;
  ${desktop({
    display: "flex",
  })}
  &:hover {
    transform: scale(1.1);
    background-color: #205de2;
  }

  h2 {
    font-size: 1rem;
  }
`;
const SupportMobile = styled.a`
  text-decoration: none;
  color: white;
  background-color: #407bff;
  border-radius: 25px;
  margin-top: 1rem;
  width: 20rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #205de2;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
  }
`;
function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      return (document.body.style.position = "fixed");
    }
    document.body.style.position = "absolute";
  }, [menuOpen]);
  return (
    <>
      <TopNav>
        <Left>
          <Logo>
            <Navigatro to="/">
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
            </Navigatro>
          </Logo>
          <BasicLogo>
            <Navigatro to="/">
              <h1>&lt; B &gt;</h1>
            </Navigatro>
          </BasicLogo>
        </Left>
        <Right>
          <NavList>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/skills">My Skills</CustomLink>
            <CustomLink to="/projects">My projects</CustomLink>
            {/* <CustomLink to="/about">About</CustomLink> */}
          </NavList>
          <Support href="https://donorbox.org/btech-donate" target="_blank">
            <h2>Support me</h2>
          </Support>
          <Hamburger
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            isOpen={menuOpen}
          >
            <span id="prva"></span>
            <span id="druga"></span>
            <span id="treca"></span>
          </Hamburger>
        </Right>
      </TopNav>
      <SideMenu isOpen={menuOpen}>
        <SideLinks>
          <ul
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/contact">Contact</CustomLink>
            </li>
            <li>
              <CustomLink to="/skills">My Skills</CustomLink>
            </li>
            <li>
              <CustomLink to="/projects">My projects</CustomLink>
            </li>
            <li>{/* <CustomLink to="/about">About</CustomLink> */}</li>
            <li>
              <SupportMobile
                href="https://donorbox.org/btech-donate"
                target="_blank"
              >
                <h2>Support me</h2>
              </SupportMobile>
            </li>
          </ul>
        </SideLinks>
      </SideMenu>
    </>
  );
}

export default TopBar;
