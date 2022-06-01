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

const Left = styled.div`
	flex: 1;
	height: 80%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: 100px;
	}
`;
const Right = styled.div`
	flex: 1;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: column;
	${desktop({
		justifyContent: "center",
		flex: "1.4",
	})}
	h1 {
		overflow: hidden;

		font-size: 6rem;
		font-weight: 300;
		${desktop({
			fontSize: "7rem",
		})}
	}
	h2 {
		overflow: hidden;

		font-weight: 200;
		text-align: center;
		width: 70%;
		font-size: 2rem;
	}
`;
const Vertical = styled.div`
	width: 1px;
	background-color: black;
	height: 70%;
	display: none;
	${desktop({
		display: "block",
	})}
`;

function OtherSkills() {
	console.log("toher skils");

	return (
		<Wrapper>
			<Left>
				<img src={PythonLogo} alt="" />
				<img src={GoLangLogo} alt="" />
				<img src={PostgresLogo} alt="" />
				<img src={GraphLogo} alt="" />
			</Left>
			<Vertical />
			<Right>
				<h1>OtherSkills</h1>
			</Right>
		</Wrapper>
	);
}

export default OtherSkills;
