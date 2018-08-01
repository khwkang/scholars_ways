import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/sw_logo.png'
import '../css/navbar.sass'


const Navbar = () => (
  <aside className="menu column is-2-desktop is-3-tablet is-hidden-mobile navbar is-fixed-top" id="navbar">
    <Link to="/" className="navbar-item">
      <figure className="image">
        <img id="sw_logo" src={logo} alt="scholars_way_logo"/>
      </figure>
    </Link>
    <p className="menu-label">
      Sholars Ways
    </p>
      <ul className="menu-list">
        <li>        
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </li>
      </ul>
    <p className="menu-label">
      Clinic
    </p>
      <ul className="menu-list">
        <li><a>Practitioners</a></li>
        <li><a>Services</a></li>
        <li><a>Expertise</a></li>
        <li><a>Fees</a></li>
        <li><a>Appointment</a></li>
      </ul>
    <p className="menu-label">
      Class
    </p>
      <ul className="menu-list">
        <li><a>Qigong</a></li>
        <li><a>Stretching</a></li>
        <li><a>Class Schedule</a></li>
      </ul>
  <hr/>
  <ul className="menu-list">
    <li><a>Library</a></li>
    <li>
      <Link className="navbar-item" to="/products">
        Products
      </Link></li>
    <li>
      <a>Contact Us</a>
    </li>
  </ul>
</aside>
)
// const Navbar = () => (
//   <nav className="navbar is-transparent is-light">
//     <div className="container">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-item">
//           <figure className="image">
//             <img id="sw_logo" src={logo} alt="scholars_way_logo"/>
//           </figure>
//         </Link>
//       </div>
//       <div className="navbar-start">
//         <div className="navbar-item has-dropdown is-hoverable">
//           <Link className="navbar-link" to="/">
//             Clinic
//           </Link>
//           <div className="navbar-dropdown is-boxed">
//             <Link className="navbar-item" to="/">
//               Practitioners
//             </Link>
//             <Link className="navbar-item" to="/">
//               Services
//             </Link>
//             <Link className="navbar-item" to="/">
//               Expertise
//             </Link>
//             <hr className="navbar-divider"></hr>
//             <Link className="navbar-item" to="/">
//               Fees
//             </Link>
//             <Link className="navbar-item is-active" to="/">
//               Appointment
//             </Link>
//           </div>
//         </div>
//         <Link className="navbar-item" to="/">
//           Class
//         </Link>
//         <Link className="navbar-item" to="/">
//           Events
//         </Link>
//         <Link className="navbar-item" to="/">
//           Contact
//         </Link>
//       </div>
//       <div className="navbar-end">
//         <Link className="navbar-item" to="/about">
//         About
//       </Link>
//         <Link className="navbar-item" to="/products">
//           Products
//         </Link>
//       </div>
//     </div>
//   </nav>
// )

export default Navbar
