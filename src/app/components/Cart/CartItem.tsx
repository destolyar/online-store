import React from "react";
import { Attribute } from "./Attribute";
import { CartItemProps, CartItemState } from "./enities/interfaces/cart-item";
import ItemAmount from "./ItemAmount";
import { ItemPrice } from "./ItemPrice";

export class CartItem extends React.Component<CartItemProps, CartItemState> {
  render() {
    const { brand, name, gallery, prices, attributes, amount, pickedAttributes } = this.props.product
    const { symbol } = this.props.currency

    return(
      <div className="cart-item">
        <div className="cart-item__info">
          <div className="cart-item__info__titles">
            <h3 className="cart-item__info__titles__brand">{brand}</h3>
            <h3 className="cart-item__info__titles__name">{name}</h3>  
          </div>
          <ItemPrice prices={prices} symbol={symbol}/>
          <div className="cart-item__info__attributes">
            {attributes.map((item, index) => <Attribute 
              key={index} 
              name={item.name} 
              productName={name}
              type={item.type} 
              items={item.items} 
              pickedAttribute={pickedAttributes.filter((pickedAttribute) => 
                item.name === pickedAttribute.name)[0]}/>)}
          </div>
        </div>
        <ItemAmount amount={amount} name={name}/>
        <img className="cart-item__image" src={gallery[0]} alt="" />
      </div>
    )
  }
}