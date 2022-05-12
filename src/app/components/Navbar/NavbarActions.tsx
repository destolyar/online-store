import React from "react"
import '../../styles/components/Navbar/NavbarActions.scss'
import { NavbarActionsProps, NavbarActionsState } from "./enities/interfaces/actions"

export class NavbarActions extends React.Component<NavbarActionsProps, NavbarActionsState> {
  constructor(props: NavbarActionsProps) {
    super(props) 
  }
  render() {
    return(
      <div className="navbar-actions">
        {this.props.children}
      </div>
    )
  }
}