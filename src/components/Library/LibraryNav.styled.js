import styled from "react-emotion";
import { css } from "emotion";
import t from "../../theme";
import { Link } from "gatsby";

export const Container = styled("div")`
  position: relative;    
  height: 100%;
  z-index: 30;
  padding-left: 0;
  border-right: 1px solid #ececec;
  width: 100%;    
  background-color: ${t.c.lightgrey1};
  ${t.mq.l} {
    position: fixed;  
    width: 25%;    
    overflow-y: scroll;    
  }
  ::-webkit-scrollbar {
    width: 0em;
  }
`;

export const Header = styled("div")`
  padding: 21px 0 0 0;
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: #2d2d2d;
  color: #fff;
  border: none;
  h1 {
    font-family: fantasy;
    font-size: 1.8rem;
  }
  h2 {
    margin: 0;
  }
`;

export const ChapterContainer = styled("div")`
  display: block;
  padding: 1.8rem 0 1.8rem 1em;
  font-size: 0.9em;
  font-weight: 700;
  border: none;
  background-color: #2d2d2d;
`;

export const ChapterLink = css`
  font-size: 1.2rem;
  margin: 10px 0;
  padding-left: 10px;
  display: block;
  border: none;
  text-transform: uppercase;
  color: ${t.c.lightgrey3};
`;

export const SectionContainer = styled.div`
  // margin: 20px 0;
  // display: none;  
`;

export const ChapterLinkActive = css`
  color: white !important;  
`;

export const StyledList = styled("li")`
  list-style: none;
`;

export const StyledPanelBlockLink = styled(Link)`
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

export const backToMain = css`
  color: #768bcc;
  font-weight: 700;
  // text-transform: uppercase;
  font-size: ${t.f(0)};
`