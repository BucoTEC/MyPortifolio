import React from "react";
import styled from "styled-components";
import { desktop } from "../../utils/responsive.js";
import PythonLogo from "../../assets/python.svg";
import GoLangLogo from "../../assets/GoLang.svg";
import PostgresLogo from "../../assets/Postgresql.svg";
import GraphLogo from "../../assets/GraphQL.svg";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	margin-top: 4rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	${desktop({
		flexDirection: "row",
	})}
`;

function OtherSkills() {
	console.log("toher skils");

	return (
		<Wrapper>
			<h1>OtherSkills</h1>
			<img src={PythonLogo} alt="" />
			<img src={GoLangLogo} alt="" />
			<img src={PostgresLogo} alt="" />
			<img src={GraphLogo} alt="" />
		</Wrapper>
	);
}

export default OtherSkills;
