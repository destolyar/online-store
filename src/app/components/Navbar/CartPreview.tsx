import React from "react";
import '../../styles/components/Navbar/CartPreview.scss'
import { CartPreviewProps, CartPreviewState } from "./enities/interfaces/cart-preview";

export class PreviewCart extends React.Component<CartPreviewProps, CartPreviewState> {
  state = {
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      const element = e.target as HTMLElement
      //To do: change class name to item class 
      if((!element.className.includes("cart-preview-container")) && this.state.isOpen) {
        this.closeWindow()
      } else if((element.id === "cart-preview-background") && this.state.isOpen) {
        this.closeWindow()
      }
    })
  }

  closeWindow() {
    this.setState((state: CartPreviewState) => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    return(
      <div className="cart-preview-container">
        <input className="cart-preview-container__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
        <img className="cart-preview-container__image" src="/header-cart.png" alt="cart" onClick={() => this.closeWindow()}/>
        <div className="cart-preview-container__cart-preview-background" id="cart-preview-background">
          <input className="cart-preview-container__cart-preview-background__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
          <div className="cart-preview-container__cart-preview-background__cart-preview" id="cart-preview">
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
            <h1>11111111111</h1>
          </div>
        </div>
      </div>
    )
  }
}