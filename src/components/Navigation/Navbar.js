import React from "react";
// import logo from "../../img/sw_logo.png";
import {
  NavbarStyled,
  StyledLogoSVG,
  NavLogoWrapper,
  NavLineBreak,
  MenuLabel,
  MenuItem
} from "./Navbar.styled";

export const Navbar = () => (
  <NavbarStyled>
    <NavLogoWrapper to="/#home_hero">
      <StyledLogoSVG />
    </NavLogoWrapper>
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
