import { Action, Dispatch } from "@reduxjs/toolkit"
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart } from "../../../slices/cartSlice"
import '../../../styles/components/Navbar/CartPreview/Buttons.scss'
import { CartPreviewButtonsProps, CartPreviewButtonsState } from "./enities/interfaces/buttons"


class Buttons extends React.Component<CartPreviewButtonsProps, CartPreviewButtonsState> {
  render() {
    const { clearCart } = this.props.actions
    return(
      <div className="cart-preview-buttons">
        <Link className="cart-preview-buttons__cart-link" to="/cart">view bag</Link>
        <button className="cart-preview-buttons__check-out" onClick={() => clearCart()}>check out</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    clearCart: () => dispatch(clearCart())
  }
})

export default connect(null, mapDispatchToProps)(Buttons)