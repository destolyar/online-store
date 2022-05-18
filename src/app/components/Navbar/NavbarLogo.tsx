import React from "react";
import { Link } from "react-router-dom";
import '../../styles/components/Navbar/NavbarLogo.scss'

export class NavbarLogo extends React.Component {
  render() {
    return(
      <div className="navbar__logo-container">
        <Link to='/'>
          <img className="navbar__logo-container__logo" src="/logo.png" alt="logo" /> 
        </Link>
      </div>
    )
  }
}