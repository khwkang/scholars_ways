import styled from "react-emotion";
import t from "../../theme";
import { ReactComponent as Logo } from "../../img/sw_logo.svg";

export const MobileNavContainer = styled("div")`
  background-color: ${t.c.nav};
  position: relative;
  height: ${t.s(4.5)};
  ${t.mq.l} {
    display: none;
  }
`;

export const TopBar = styled("div")`
  color: ${t.c.white};
  position: relative;
`;

export const HamburgerMenuContainer = styled("div")`
  cursor: pointer;
  position: absolute;
  z-index: 30;
  right: 1.5rem;
  top: 1.5rem;
  ${t.mq.l} {
    display: none;
  }
`;

export const StyledLogoSVG = styled(Logo)`
  width: ${t.s(4)};
  padding: ${t.s(0)} 0 0 ${t.s(0)};
`

export const TopBarText = styled("p")`
  display: inline-block;
  font-size: 1.5rem;
  position: absolute;
  top: 0px;
  padding-left: 0.7rem;
  color: ${t.c.white};
`;
export const DropdownContainer = styled("div")`
  padding-left: ${t.s(2)};
  background: #2a2828;
  padding-bottom: 30px;
  display: ${p => (p.isOpen ? "block" : "none")};
`;
