import React from "react";
import '../../styles/components/Navbar/CartPreview.scss'

export class PreviewCart extends React.Component {
  render() {
    return(
      <div className="cart-preview">
        <img className="cart-preview__image" src="./header-cart.png" alt="cart" />
      </div>
    )
  }
}