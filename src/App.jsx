import React from "react";
import Home from "./pages/Home";
import TopBar from "./ui/TopBar";
import Footer from "./ui/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";
const Wrapper = styled.div`
	width: 100vw;
`;
function App() {
	const location = useLocation();
	return (
		<Wrapper>
			<TopBar />
			<AnimatePresence>
				<Routes key={location.key} location={location}>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</Wrapper>
	);
}

export default App;
