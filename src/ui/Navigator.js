import styled from "styled-components";
import { Link } from "react-router-dom";
const Navigatro = styled(Link)`
  text-decoration: none;
  overflow: hidden;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: none;
  }
  color: black;
`;

export default Navigatro;
