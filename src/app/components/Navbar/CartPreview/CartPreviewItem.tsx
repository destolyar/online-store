import React from "react";
import { CartPreviewItemProps, CartPreviewItemState } from "./enities/interfaces/cart-preview-item";
import { ItemPrice } from "./ItemPrice";


export class CartPreviewItem extends React.Component<CartPreviewItemProps, CartPreviewItemState> {    
  render() {
    const { brand, name, gallery, prices } = this.props.product
    const { symbol } = this.props.currency

    return(
      <div className="cart-preview-item">
        <div className="cart-preview-item__info">
          <div className="cart-preview-item__info__titles">
            <h3 className="cart-preview-item__info__titles__brand">{brand}</h3>
            <h3 className="cart-preview-item__info__titles__name">{name}</h3>  
          </div>
          <ItemPrice prices={prices} symbol={symbol}/>
          <div className="cart-preview-item__info__attributes">

          </div>
        </div>
        <div className="cart-preview-item__amount">
          +
        </div>
        <img className="cart-preview-item__image" src={gallery[0]} alt="" />
      </div>
    )
  }
}