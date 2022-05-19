import React from "react";
import { CartPreviewAttributeProps, CartPreviewAttributeState } from "../Navbar/CartPreview/enities/interfaces/attribute";
import AttributeItem from "./AttributeItem";


export class Attribute extends React.Component<CartPreviewAttributeProps, CartPreviewAttributeState> {
  render() {
    const { name, type, items, pickedAttribute, productName } = this.props

    return(
      <div className="cart-item-attribute">
        <h3 className="cart-item-attribute__title">{name}:</h3>
        <div className="cart-item-attribute__items">
          {items.map((item, index) => <AttributeItem 
            key={index} 
            type={type} 
            productName={productName} 
            item={item} 
            index={index}
            pickedAttribute={pickedAttribute}
            attributeName={pickedAttribute.name}
            />)}
        </div>
      </div>
    )
  }
}