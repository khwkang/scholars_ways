import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/sw_logo.png'
import '../css/index.sass'

const Navbar = () => (
  <nav className="navbar is-transparent is-light">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img id="sw_logo" src={logo} alt="scholars_way_logo"/>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/">
            Clinic
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item" to="/">
              Practitioners
            </Link>
            <Link className="navbar-item" to="/">
              Services
            </Link>
            <Link className="navbar-item" to="/">
              Expertise
            </Link>
            <hr className="navbar-divider"></hr>
            <Link className="navbar-item" to="/">
              Fees
            </Link>
            <Link className="navbar-item is-active" to="/">
              Appointment
            </Link>
          </div>
        </div>
        <Link className="navbar-item" to="/">
          Class
        </Link>
        <Link className="navbar-item" to="/">
          Events
        </Link>
        <Link className="navbar-item" to="/">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
