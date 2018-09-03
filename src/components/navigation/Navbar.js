import React from 'react'
import logo from '../../img/sw_logo.png'
import animation from './animation.js'
import Link from '../LinkTrack.js'
import {
  NavbarStyled,
  NavLogo,
  NavLogoWrapper,
  NavLineBreak,
  MenuLabel,
  MenuItem,
} from './Navbar.styled'

export const Navbar = () => (
  <NavbarStyled>
    <NavLogoWrapper to="/#home_hero" onClick={animation.spinLogo}>
      <NavLogo id="sw_logo" src={logo} alt="scholars_way_logo" />
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
    <MenuItem to="/library">Library</MenuItem>
    <MenuItem to="/contact">Join Us</MenuItem>
  </NavbarStyled>
)
