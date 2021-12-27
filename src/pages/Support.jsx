import React from "react";
import styled from "styled-components";
import { phone } from "../utils/responsive";

const Wrapper = styled.div`
max-width: 50rem;
  margin: auto;
  display: flex;
  justify-content: center;
    ${phone({
      width: "100%",
    })}
    
  }
`;
function Support() {
  return (
    <Wrapper>
      <iframe
        title="donation-form"
        src="https://donorbox.org/embed/btech-support"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          marginTop: "2rem",
          maxHeight: "none!important",
        }}
      ></iframe>
      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="true"
      ></script>
    </Wrapper>
  );
}

export default Support;
