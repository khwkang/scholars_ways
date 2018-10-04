import styled from "react-emotion";
import {css} from 'emotion'
import { Link } from "gatsby";
import t from "../../theme";

export const ArticleContainer = styled.div`  
  background-color: grey;
  display: ${p => p.isOpen ? 'block' : 'none'};
`;

export const ArticleLink = styled.a`
  display: block;
  padding: 0.8rem 0 0.6rem 1.5em;
  color: black;
`;

export const StyledList = styled("li")`
  list-style: none;
`;

export const StyledSectionLink = styled(Link)`  
  padding: 0.8rem 0 0.6rem 1.5em;
  display: inline-block;
  border: none;
  font-size: ${t.f(0)};
  color: ${p => (p.published ? "black" : "gray")};
  cursor: ${p => (p.published ? "pointer" : "not-allowed")};
  color: ${p => (p.isActive ? 'blue' : 'black')};
  width: 100%;
  &:hover {
    background-color: #f4f4f4;  
  }
`;

export const ActiveSectionLink = css`
  color: blue;
`
