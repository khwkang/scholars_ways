import styled from "react-emotion";
import {css} from 'emotion'
import { Link } from "gatsby";
import t from "../../theme";

export const ChildLink = styled(Link)`
  display: block;
  padding: 0px 0 20px 0px;
  color: black;
`;
export const StyledList = styled("li")`
  list-style: none;
`;

export const StyledPanelBlockLink = css`  
  padding: 0.8rem 0 0.6rem 1.5em;
  display: inline-block;
  border: none;
  font-size: ${t.f(0)};
  // color: ${p => (p.published ? "black" : "gray")};
  // cursor: ${p => (p.published ? "pointer" : "not-allowed")};
  width: 100%;
  &:hover {
    background-color: #f4f4f4;  
  }
`;

export const ActiveSectionLink = css`
  color: blue;
`
