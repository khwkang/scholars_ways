import React from "react"
import logo from "../../img/sw_logo.png"
import animation from "./animation.js"
import LinkTrack from "../LinkTrack.js"

export default class Navbar extends React.Component {
  render() {
    return (
      <aside
        className="custom_scroll menu column is-2-desktop is-3-tablet is-hidden-touch navbar is-fixed-top"
        id="side_nav"
      >
        <LinkTrack
          to="/#home_hero"
          className="logo_wrapper"
          onClick={animation.spinLogo}
        >
          <img id="sw_logo" src={logo} alt="scholars_way_logo" />
        </LinkTrack>
        <hr className="nav_hr" />
        <p className="menu-label">Sholars Ways</p>
        <ul className="menu-list">
          <li>
            <LinkTrack to="/about">About</LinkTrack>
          </li>
        </ul>
        <hr className="nav_hr" />
        <p className="menu-label">Clinic</p>
        <ul className="menu-list">
          <li>
            <LinkTrack to="/clinic/practitioner">Practitioners</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/clinic/expertise">Expertise</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/clinic/appointment">Appointment</LinkTrack>
          </li>
        </ul>
        <hr className="nav_hr" />
        <p className="menu-label">Training</p>
        <ul className="menu-list">
          <li>
            <LinkTrack to="/class">Classes</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/class/schedule">Schedule</LinkTrack>
          </li>
        </ul>
        <hr className="nav_hr" />
        <ul className="menu-list">
          <li>
            <LinkTrack to="/library">Library</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/blog">Blog</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/contact">Join Us</LinkTrack>
          </li>
          <li>
            <LinkTrack to="/products">Products</LinkTrack>
          </li>
        </ul>
      </aside>
    );
  }
}
