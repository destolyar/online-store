import React from "react";
import { CartPreviewItemProps, CartPreviewItemState } from "./enities/interfaces/cart-preview-item";
import '../../../styles/components/Navbar/CartPreview/CartPreviewItem.scss'
import { ItemPrice } from "./ItemPrice";
import ItemAmount from "./ItemAmount";
import { Attribute } from "./Attribute";


export class CartPreviewItem extends React.Component<CartPreviewItemProps, CartPreviewItemState> {    
  render() {
    const { brand, name, gallery, prices, attributes, amount } = this.props.product
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
            {attributes.map((item) => <Attribute name={item.name}/>)}
          </div>
        </div>
        <ItemAmount amount={amount} name={name}/>
        <img className="cart-preview-item__image" src={gallery[0]} alt="" />
      </div>
    )
  }
}