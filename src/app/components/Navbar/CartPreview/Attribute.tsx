import React from "react";
import '../../../styles/components/Navbar/CartPreview/Attribute.scss'
import AttributeItem from "./AttributeItem";
import { CartPreviewAttributeProps, CartPreviewAttributeState } from "./enities/interfaces/attribute";

export class Attribute extends React.Component<CartPreviewAttributeProps, CartPreviewAttributeState> {
  render() {
    const { name, type, items, pickedAttribute, productName } = this.props

    return(
      <div className="cart-preview-item-attribute">
        <h3 className="cart-preview-item-attribute__title">{name}:</h3>
        <div className="cart-preview-item-attribute__items">
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