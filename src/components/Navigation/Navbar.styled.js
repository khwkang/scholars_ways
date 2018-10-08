import styled from "react-emotion";
import t from "../../theme";
import { Link } from "gatsby";

export const NavbarStyled = styled("div")`
  position: fixed;
  background: ${t.c.nav};
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: ${t.s(2)};
  display: none;
  width: ${t.s(8)};

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #2a2828;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3a3a3a;
    outline: 1px solid slategrey;
  }

  ${t.mq.l} {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;  
  align-items: center;
  justify-content: center;  
  margin-left: -${t.s(2)};
  margin-top: ${t.s(0)};
`;

export const SVGContainer = styled.div`
  width: ${t.s(4.5)};
  height: ${t.s(4.5)};
`

export const NavLineBreak = styled("hr")`
  width: 85%;
  background-color: #313131;
  margin: 15px 0 0 0;
  border: none;
  height: 1px;
`;

export const MenuLabel = styled("p")`
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #707070;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const MenuItem = styled(Link)`
  display: block;
  color: ${t.c.lightgrey2};
  font-size: 1.1rem;
  font-weight: 500;
  padding: 10px 0;
  :hover {
    color: ${t.c.white};
  }
`;
