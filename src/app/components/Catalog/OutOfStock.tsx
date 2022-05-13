import React from "react";

export class OutOfStock extends React.Component {
  render() {
    const { children } = this.props

    return(
      <div className="out-of-stock">
        {children}
      </div>
    )
  }
}