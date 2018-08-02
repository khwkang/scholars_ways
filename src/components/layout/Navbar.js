import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/sw_logo.svg'
import animation from './animation.js'

export default class Navbar extends React.Component {
  render() {
    return (
      <aside className="custom_scroll menu column is-2-desktop is-3-tablet is-hidden-touch navbar is-fixed-top" id="navbar">
        <Link to="/" className="logo_wrapper" onClick={animation.spinLogo}>
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
          <li><Link to="/">Practitioners</Link></li>
          <li><Link to="/">Services | Expertise</Link></li>
          <li><Link to="/">Fees</Link></li>
          <li><Link to="/">Appointment</Link></li>
        </ul>
        <hr className="nav_hr"/>
        <p className="menu-label">
          Class
        </p>
        <ul className="menu-list">
          <li><Link to="/">Current Classes</Link></li>
          <li><Link to="/">Schedule</Link></li>
        </ul>
        <hr className="nav_hr"/>
        <ul className="menu-list">
          <li><Link to="/">Library</Link></li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </aside>
    )
  }
}