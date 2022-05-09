import React from "react"
import '../../styles/components/Navbar/NavbarCategories.scss'

export class NavbarCategories extends React.Component {
  render() {
    return(
      <div className="navbar-categories">
        <button>Women</button>
        <button>Men</button>
        <button>Kids</button>
      </div>
    )
  }
}