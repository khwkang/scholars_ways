import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/sw_logo.svg'

export default class MobileNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      "toggle":""
    }
  }

  toggleDropdown = () => {
    this.state.toggle === "is-active" ? this.setState({"toggle":""}) : this.setState({"toggle":"is-active"})
  }

  toggleDropdownFromLogo = () => {
    return this.state.toggle != "is-active" ? true : this.setState({"toggle":""})
  }
  
  render() {
    return (
      <nav className="navbar column is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" onClick={this.toggleDropdownFromLogo} to="/">
              <img id="sw_logo_mobile" src={logo} alt="scholars way logo image"/>
            </Link>
            <p className="menu-label logo_font">
              Sholars Ways
            </p>
            <span role="button" className={"navbar-burger burger " + this.state.toggle} 
              onClick={this.toggleDropdown} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div id="mobile_nav_menu" className={"navbar-menu " + this.state.toggle}>
            <div className="navbar-end">
              <hr className="nav_hr"/>
              <p className="menu-label">Clinic</p>
              <ul className="menu-list">
                <li><Link onClick={this.toggleDropdown} to="/">Practitioners</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Services | Expertise</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Fees</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Appointment</Link></li>
              </ul>
              <hr className="nav_hr"/>
              <p className="menu-label">Class</p>
              <ul className="menu-list">
                <li><Link onClick={this.toggleDropdown} to="/">Current Classes</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Schedule</Link></li>
              </ul>
              <hr className="nav_hr"/>
              <ul className="menu-list">
                <li><Link onClick={this.toggleDropdown} to="/about">About</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Library</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/products">Products</Link></li>
                <li><Link onClick={this.toggleDropdown} to="/">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}