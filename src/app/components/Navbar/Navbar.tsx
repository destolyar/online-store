import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import NavbarCategories from "./NavbarCategories";
import PreviewCart from "./CartPreview/CartPreview";
import { NavbarActions } from "./NavbarActions";
import { NavbarLogo } from "./NavbarLogo";
import '../../styles/components/Navbar/Navbar.scss'


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