import React from "react";
import { CartPreviewAttributeProps, CartPreviewAttributeState } from "./enities/interfaces/attribute";

export class Attribute extends React.Component<CartPreviewAttributeProps, CartPreviewAttributeState> {
  render() {
    const { name } = this.props

    return(
      <div className="cart-preview-attribute">
        <h3 className="cart-preview-attribute">{name}:</h3>
      </div>
    )
  }
}