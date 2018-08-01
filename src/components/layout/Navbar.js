import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/sw_logo.svg'
import animation from './animation.js'
// import {TweenMax, TimelineMax} from 'gsap'

export default class Navbar extends React.Component {
  render() {
    return (
      <aside className="custom_scroll menu column is-2-desktop is-3-tablet is-hidden-mobile navbar is-fixed-top" id="navbar">
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
// export default Navbar
