import React from 'react'
import {Link} from 'gatsby'
import logo from '../../img/sw_logo.png'
import HamburgerMenu from 'react-hamburger-menu'
import { Toggle } from 'react-powerplug'
import t from '../../theme'
import {
  Container,
  HamburgerMenuContainer,
  TopBar,
  TopBarLogo,
  TopBarText,
  MobileNavContainer,
} from './Mobile.styled'
import { NavLineBreak, MenuLabel, MenuItem } from './Navbar.styled'

export const Mobile = () => (
  <Toggle>
    {({ on: mobileNavOn, toggle: toggleMobileNav }) => (
      <Container>
        <TopBar>
          <Link to="/">
            <TopBarLogo
              src={logo}
              alt="scholars way logo image"
              onClick={mobileNavOn && toggleMobileNav}
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
        <MobileNavContainer isOpen={mobileNavOn}>
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
          <MenuItem to="/library" onClick={toggleMobileNav}>
            Library
          </MenuItem>
          <MenuItem to="/contact" onClick={toggleMobileNav}>
            Join Us
          </MenuItem>
        </MobileNavContainer>
      </Container>
    )}
  </Toggle>
)
