import React from "react";
import styled from "styled-components";
import TopPosition from "../utils/TopPosition";
import { phone } from "../utils/responsive";
import Main from "../components/Skills/Main";
import Mongo from "../components/Skills/Mongo";
import Express from "../components/Skills/Express";
import ReactIntro from "../components/Skills/ReactIntro";
import Node from "../components/Skills/Node";
import OtherSkills from "../components/Skills/OtherSkills";
import ScrollToTop from "react-scroll-to-top";
import AnimatePage from "../utils/AnimatePage";
import BottomNav from "../ui/BottomNav";

const Wrapper = styled.div`
	max-width: 71rem;
	overflow: hidden;
	margin: auto;
	${phone({
		width: "100%",
	})}
`;

function Skills() {
	return (
		<AnimatePage>
			<Wrapper>
				<TopPosition />
				<ScrollToTop
					smooth={true}
					color="#407bff"
					top={1000}
					style={{ width: "4rem", height: "4rem" }}
				/>
				<Main />
				<Mongo />
				<Express />
				<ReactIntro />
				<Node />
				<OtherSkills />
				<BottomNav
					leftUrl={"/contact"}
					leftText={"Contact Me"}
					rightUrl={"/projects"}
					rightText={"My Projects"}
				/>
			</Wrapper>
		</AnimatePage>
	);
}

export default Skills;
