import React from "react";
import styled from "styled-components";
import { phone } from "../../utils/responsive.js";
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 4rem;
`;

const FormWrapper = styled.div`
  width: 90%;
  height: 95%;
  margin: auto;
  overflow: hidden;
  background-color: #bdd1ff;
  border-radius: 10px;
  overflow: hidden;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    margin-top: 5rem;
    input {
      border: none;
      margin: 1rem 0;
      background-color: inherit;
      font-size: 2rem;
      border-bottom: 1px solid #407bff;
      color: #263238;
      &:focus {
        outline-style: none;
      }
      &::placeholder {
        color: #00000063;
        font-weight: 400;
      }
    }
    textarea {
      color: #263238;
      border: none;
      background-color: inherit;
      font-size: 2rem;
      width: 100%;
      height: 15rem;
      resize: none;
      ${phone({
        height: "22rem",
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
        color: #00000063;
        font-weight: 400;
      }
    }
  }
`;
const SubmitButton = styled.button`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
`;
function ContactForm() {
  return (
    <Wrapper>
      <FormWrapper>
        <form action="/">
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Enter email" />
          <input type="text" placeholder="Title" />
          <textarea name="" id="" placeholder="Your question ..."></textarea>
          <SubmitButton>submit</SubmitButton>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}

export default ContactForm;
