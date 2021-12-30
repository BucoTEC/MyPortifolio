import React from "react";
import styled from "styled-components";
import { phone } from "../utils/responsive";
import Position from "../components/Contact/Position";
import ContactForm from "../components/Contact/ContactForm";
import TopPosition from "../utils/TopPosition";
import AnimatePage from "../utils/AnimatePage";
import BottomNav from "../ui/BottomNav";
const Wrapper = styled.div`
  max-width: 71rem;
  margin: auto;
  overflow: hidden;
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
        <BottomNav
          leftUrl={"/"}
          leftText={"Home"}
          rightUrl={"/skills"}
          rightText={"My Skills"}
        />
      </Wrapper>
    </AnimatePage>
  );
}

export default Contact;
