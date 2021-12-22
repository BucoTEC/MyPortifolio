import { css } from "styled-components";

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1280px) {
      ${props}
    } ;
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 380px) {
      ${props}
    } ;
  `;
};

export const phone = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    } ;
  `;
};
