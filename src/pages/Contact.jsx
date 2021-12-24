import React from "react";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import Position from "../components/Contact/Position";
import ContactForm from "../components/Contact/ContactForm";
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
    <Wrapper>
      <Position />
      <ContactForm />
    </Wrapper>
  );
}

export default Contact;
