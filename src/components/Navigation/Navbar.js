import React from "react";
import {
  NavbarStyled,
  SVGContainer,
  StyledLogoSVG,
  StyledLink,
  NavLineBreak,
  MenuLabel,
  MenuItem
} from "./Navbar.styled";
import { ReactComponent as Logo } from "../../img/sw_logo_2.svg";

export const Navbar = () => (
  <NavbarStyled>
    <StyledLink to="/#home_hero">
      <SVGContainer>
        <Logo />
      </SVGContainer>
    </StyledLink>
    <NavLineBreak />
    <MenuLabel>Sholars Ways</MenuLabel>
    <MenuItem to="/about">About</MenuItem>
    <NavLineBreak />
    <MenuLabel>Clinic</MenuLabel>
    <MenuItem to="/clinic/practitioner">Practitioners</MenuItem>
    <MenuItem to="/clinic/expertise">Expertise</MenuItem>
    <MenuItem to="/clinic/appointment">Appointment</MenuItem>
    <NavLineBreak />
    <MenuLabel>Training</MenuLabel>
    <MenuItem to="/class">Classes</MenuItem>
    <MenuItem to="/class/schedule">Schedule</MenuItem>
    <NavLineBreak />
    <MenuItem to="/library/start-here">Library</MenuItem>
    <MenuItem to="/contact">Join Us</MenuItem>
  </NavbarStyled>
);
