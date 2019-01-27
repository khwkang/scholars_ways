import React from "react";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";
import { Toggle } from "react-powerplug";
import t from "../../theme";
import {
  MobileNavContainer,
  HamburgerMenuContainer,
  TopBar,
  StyledLogoSVG,
  TopBarText,
  DropdownContainer
} from "./Mobile.styled";
import { NavLineBreak, MenuLabel, MenuItem } from "./Navbar.styled";

export const Mobile = () => (
  <Toggle>
    {({ on: mobileNavOn, toggle: toggleMobileNav }) => (
      <MobileNavContainer>
        <TopBar>
          <Link to="/">
            <StyledLogoSVG                            
              onClick={mobileNavOn ? toggleMobileNav : undefined}
            />
          </Link>
          <TopBarText>Sholars Way</TopBarText>
          <HamburgerMenuContainer>
            <HamburgerMenu
              color="white"
              height={20}
              isOpen={mobileNavOn}
              menuClicked={toggleMobileNav}
              strokeWidth={t.s(1) * 16}
              width={t.s(1) * 16}
            />
          </HamburgerMenuContainer>
        </TopBar>
        <DropdownContainer isOpen={mobileNavOn}>
          <NavLineBreak />
          <MenuLabel>Clinic</MenuLabel>
          <MenuItem to="/clinic/practitioner" onClick={toggleMobileNav}>
            Practitioners
          </MenuItem>
          <MenuItem to="/clinic/expertise" onClick={toggleMobileNav}>
            Expertise
          </MenuItem>
          <MenuItem to="/clinic/appointment" onClick={toggleMobileNav}>
            Appointment
          </MenuItem>
          <NavLineBreak />
          <MenuLabel>Training</MenuLabel>
          <MenuItem to="/class" onClick={toggleMobileNav}>
            Classes
          </MenuItem>
          <MenuItem to="/class/schedule" onClick={toggleMobileNav}>
            Schedule
          </MenuItem>
          <NavLineBreak />
          <MenuItem to="/about" onClick={toggleMobileNav}>
            About
          </MenuItem>
          {/* <MenuItem to="/library/start-here" onClick={toggleMobileNav}>
            Library
          </MenuItem> */}
          <MenuItem to="/contact" onClick={toggleMobileNav}>
            Join Us
          </MenuItem>
        </DropdownContainer>
      </MobileNavContainer>
    )}
  </Toggle>
);
