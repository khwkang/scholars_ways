import styled from "react-emotion";
import {css} from 'emotion'
import { Link } from "gatsby";
import t from "../../theme";

export const ArticleContainer = styled.div`  
  background-color: ${t.c.lightgrey2};
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
  font-weight: ${p => (p.isActive ? '500' : '300')};
  width: 100%;
  &:hover {
    background-color: ${t.c.lightgrey2};  
  }
`;

export const ActiveSectionLink = css`
  color: blue;
`
