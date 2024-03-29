import { css } from "styled-components";

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 430px) and (max-width: 1200px) and (orientation: landscape) {
      ${props}
    } ;
  `;
};

export const phone = (props) => {
  return css`
    @media only screen and (max-width: 430px) {
      ${props}
    } ;
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    } ;
  `;
};
