import styled from "react-emotion";
import { css } from "emotion";
import t from "../../theme";

export const Container = styled("div")`
  position: relative;
  height: 100%;
  z-index: 30;
  padding-left: 0;
  border-right: 1px solid #ececec;

  ${t.mq.l} {
    width: 22%;
    position: fixed;
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
  color: gray;
`;
export const ChapterLinkActive = css`
  color: white !important;
`;

export const StyledList = styled("li")`
  list-style: none;
`;
