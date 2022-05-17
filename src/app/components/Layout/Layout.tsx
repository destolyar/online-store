import React from "react"
import '../../styles/components/Layout/Layout.scss'

export class Layout extends React.Component {
  render() {
    return(
      <main className="layout">
        {this.props.children}
      </main>
    )
  }
}