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
	flex-direction: column-reverse;
	${desktop({
		flexDirection: "row",
	})}
`;

const Left = styled.div`
	flex: 3;
	height: 70%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	${desktop({
		flex: "1",
	})}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: column;
	overflow: hidden;
	${desktop({
		justifyContent: "center",
		flex: "1.4",
	})}
	h1 {
		overflow: hidden;
		text-align: start;
		font-size: 6rem;
		font-weight: 300;
		${desktop({
			fontSize: "7rem",
		})}
	}
	h2 {
		overflow: hidden;
		text-align: start;
		font-weight: 200;
		font-size: 2rem;
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	img {
		height: 100px;
		margin: 1rem;
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
	return (
		<Wrapper>
			<Left>
				<Inner>
					<img src={GraphLogo} alt="" />
					<img src={PythonLogo} alt="" />
					<img src={PostgresLogo} alt="" />
				</Inner>
				<Inner>
					<img src={GraphLogo} alt="" />
					<img src={GoLangLogo} alt="" />
					<img src={GraphLogo} alt="" />
				</Inner>
			</Left>
			<Vertical />
			<Right>
				<div>
					<h1>I'm also</h1>
					<h2>familiar with</h2>
				</div>
			</Right>
		</Wrapper>
	);
}

export default OtherSkills;
