import React from "react";
import styled from "styled-components";
import { desktop } from "../../utils/responsive.js";
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
			<div>OtherSkills</div>
		</Wrapper>
	);
}

export default OtherSkills;
