import React from "react";
import styled from "styled-components";
import { phone, tablet, desktop } from "../../utils/responsive.js";
const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 1rem;
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
`;
const FormWrapper = styled.div`
  width: 90%;
  height: 95%;
  margin: auto;
  overflow: hidden;
  overflow: hidden;
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    margin-top: 1rem;
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
        color: #263238;
        font-weight: 400;
      }
    }
    textarea {
      color: #263238;
      border: none;
      background-color: inherit;
      font-size: 1.5rem;
      width: 100%;
      height: 11rem;
      resize: none;
      margin-bottom: 1rem;
      ${phone({
        height: "17rem",
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
        color: #263238;
        font-weight: 400;
      }
    }
  }
`;
const Button = styled.div`
  color: whitesmoke;
  background-color: #407bff;
  width: 50%;
  border-radius: 50px;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in;
  cursor: pointer;
  ${phone({
    width: "100%",
  })}

  h1 {
    font-weight: 400;
    font-size: 1.7rem;
    overflow: hidden;
    transition: all 0.3s ease-in;
    ${tablet({
      fontSize: "2rem",
    })}
  }
  &:hover {
    background-color: #467cf3;
    transform: scale(1.1);
    box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.25);
    ${phone({
      transform: "scale(1)",
    })}
    h1 {
      transform: scale(1.1);
      ${phone({
        transform: "scale(1)",
      })}
    }
  }
`;

function ContactForm() {
  return (
    <>
      <MainTitle>
        <h1>Contact me</h1>
      </MainTitle>
      <Wrapper>
        <FormWrapper>
          <form action="/">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Title" />
            <textarea name="" id="" placeholder="Your question ..."></textarea>
            <Button>
              <h1>Send</h1>
            </Button>
          </form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default ContactForm;
