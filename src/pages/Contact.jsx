import React from "react";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import Position from "../components/Contact/Position";
import ContactForm from "../components/Contact/ContactForm";
import TopPosition from "../utils/TopPosition";
import AnimatePage from "../utils/AnimatePage";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
    ${phone({
      width: "100%",
    })}
    
  }
`;
function Contact() {
  return (
    <AnimatePage>
      <TopPosition />
      <Wrapper>
        <Position />
        <ContactForm />
      </Wrapper>
    </AnimatePage>
  );
}

export default Contact;
