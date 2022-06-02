import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { phone, tablet } from "../../utils/responsive.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingIcon from "../../assets/loading.svg";

const Wrapper = styled.div`
	min-height: 33rem;
	height: 80vh;
	width: 100%;
	overflow: hidden;
	position: relative;
	padding-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	${tablet({
		height: "50vh",
	})}
`;
const MainTitle = styled.div`
	height: 20vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: end;
	h1 {
		font-size: 6rem;
		font-weight: 300;
		color: #263238;
		${phone({
			fontSize: "4rem",
		})}
	}

	@media (orientation: landscape) {
		padding: 1.5rem;
	}
`;
const FormWrapper = styled.div`
	height: 100%;
	width: 90%;
	margin: auto;
	overflow: hidden;
	overflow: hidden;
	form {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 80%;
		margin: auto;
		input {
			border: none;
			margin: 1rem 0;
			background-color: inherit;
			font-size: 1.5rem;
			border-bottom: 1px solid #263238;
			color: #263238;
			&:focus {
				outline-style: none;
			}
			&::placeholder {
				color: #26323865;
				font-weight: 400;
			}
		}
		textarea {
			color: #263238;
			border: none;
			background-color: inherit;
			font-size: 1.5rem;
			width: 100%;
			height: 12rem;
			resize: none;
			padding: 1rem 0;
			${phone({
				height: "15rem",
			})}
			&::-webkit-scrollbar {
				width: 10px;
			}

			&::-webkit-scrollbar-track {
				background: rgb(179, 177, 177);
				border-radius: 25px;
			}

			&::-webkit-scrollbar-thumb {
				background: rgb(136, 136, 136);
				border-radius: 10px;
			}

			&::-webkit-scrollbar-thumb:hover {
				background: #407bff;
				border-radius: 10px;
			}

			&::-webkit-scrollbar-thumb:active {
				background: rgb(68, 68, 68);
				border-radius: 10px;
			}
			&:focus {
				outline-style: none;
			}
			&::placeholder {
				color: #26323865;
				font-weight: 400;
			}
		}
		input[type="submit"] {
			border: none;
			color: whitesmoke;
			background-color: #407bff;
			width: 50%;
			border-radius: 50px;
			height: 4rem;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: auto;
			margin-bottom: 1.5rem;
			transition: all 0.3s ease-in;
			cursor: pointer;
			${phone({
				width: "100%",
			})}

			&:hover {
				background-color: #467cf3;
				transform: scale(1.1);
				box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
				-webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
				-moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
				${phone({
					transform: "scale(1)",
				})}
			}
		}
	}
`;
const LoadingSvg = styled.img`
	height: 20%;
	animation: spin 1s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
function ContactForm() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const success = () =>
		toast.info("✉ successfully sent!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
		});

	const failSend = () => {
		toast.error("Ups something went wrong!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.sendForm(
				"service_p71zuoc",
				"template_p1k2bhf",
				form.current,
				"user_EPVFxWFUSc4QcMvCYOIBd"
			)
			.then(
				(result) => {
					success();
					console.log(result.text);
					setLoading(false);
				},
				(error) => {
					failSend();
					console.log(error.text);
					setLoading(false);
				}
			);
		e.target.reset();
	};

	return (
		<div id="contact">
			<MainTitle data-aos="fade-up">
				<h1>Contact me</h1>
			</MainTitle>
			<Wrapper>
				{loading ? (
					<LoadingSvg src={LoadingIcon} />
				) : (
					<FormWrapper data-aos="fade-up">
						<form ref={form} onSubmit={sendEmail}>
							<input type="text" placeholder="Your name" name="name" required />
							<input
								type="email"
								placeholder="Your email"
								name="email"
								required
							/>
							<input type="text" placeholder="Title" name="title" required />
							<textarea
								placeholder="Your message"
								name="message"
								required
							></textarea>
							<input type="submit" value="Send"></input>
						</form>
					</FormWrapper>
				)}
			</Wrapper>
			<ToastContainer />
		</div>
	);
}

export default ContactForm;
