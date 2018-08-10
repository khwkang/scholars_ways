import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/sw_logo.png'
import animation from './animation.js'

export default class Navbar extends React.Component {
  render() {
    return (
      <aside className="custom_scroll menu column is-2-desktop is-3-tablet is-hidden-touch navbar is-fixed-top" id="navbar">
        <Link to="/#home_hero" className="logo_wrapper" onClick={animation.spinLogo}>
          <img id="sw_logo" src={logo} alt="scholars_way_logo"/>
        </Link>
        <hr className="nav_hr"/>
        <p className="menu-label">
          Sholars Ways
        </p>
        <ul className="menu-list">
          <li>        
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
        <hr className="nav_hr"/>
        <p className="menu-label">
          Clinic
        </p>
        <ul className="menu-list">
          <li><Link to="/clinic/practitioner">Practitioners</Link></li>
          <li><Link to="/clinic/expertise">Expertise</Link></li>
          <li><Link to="/">Appointment</Link></li>
        </ul>
        <hr className="nav_hr"/>
        <p className="menu-label">
          Training
        </p>
        <ul className="menu-list">
          <li><Link to="/">Classes</Link></li>
          <li><Link to="/">Schedule</Link></li>
        </ul>
        <hr className="nav_hr"/>
        <ul className="menu-list">
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/">Join Us</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </aside>
    )
  }
}