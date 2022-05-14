import React from "react";
import '../../styles/components/Navbar/NavbarLogo.scss'

export class NavbarLogo extends React.Component {
  render() {
    return(
      <div className="navbar__logo-container">
        <img className="navbar__logo-container__logo" src="/logo.png" alt="logo" />
      </div>
    )
  }
}