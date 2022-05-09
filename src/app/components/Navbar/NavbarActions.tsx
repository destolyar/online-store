import React from "react"
import '../../styles/components/Navbar/NavbarActions.scss'

export class NavbarActions extends React.Component<any, any> {
  constructor(props: any) {
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