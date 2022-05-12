import React from "react";
import '../../styles/components/Navbar/Navbar.scss'
import { CurrencyDropdown } from "./CurrencyDropdown";
import { NavbarActions } from "./NavbarActions";
import NavbarCategories from "./NavbarCategories";
import { NavbarLogo } from "./NavbarLogo";
import { PreviewCart } from "./PreviewCart";

export class Navbar extends React.Component {
  render() {
    return(
      <header className="navbar">
        <NavbarCategories/>
        <NavbarLogo/>
        <NavbarActions>
          <CurrencyDropdown/>
          <PreviewCart/>
        </NavbarActions>
      </header>
    )
  }
}