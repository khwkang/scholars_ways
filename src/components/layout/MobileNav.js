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

  toggleDropdown() {
    this.state.toggle === "is-active" ? this.setState({"toggle":""}) : this.setState({"toggle":"is-active"})
  }
  
  render() {
    return (
      <nav className="navbar column is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </Link>
            <Link to="" role="button" className={"navbar-burger burger " + this.state.toggle} onClick={this.toggleDropdown.bind(this)} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div id="mobile_nav_menu" className={"navbar-menu " + this.state.toggle}>
            <div className="navbar-end">
              <Link to="" className="navbar-item">Hello</Link>
              <Link to="" className="navbar-item">Menu 1</Link>
              <Link to="" className="navbar-item">Menu 2</Link>
              <Link to="" className="navbar-item">Menu 3</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}