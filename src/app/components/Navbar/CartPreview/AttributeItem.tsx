import React from "react";
import { CartPreviewAttributeItemProps, CartPreviewAttributeItemState } from "./enities/interfaces/attribute-item";
import '../../../styles/components/Navbar/CartPreview/AttributeItem.scss'
import { connect } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { changePickedAttribute } from "../../../slices/cartSlice";
import { PickedAttribute } from "../../../enities/interfaces/data";


class AttributeItem extends React.Component<CartPreviewAttributeItemProps, CartPreviewAttributeItemState> {
  render() {
    const { item } = this.props
    const { value } = item
    const { type, pickedAttribute, attributeName, productName, index } = this.props

    const { setAttribute } = this.props.actions
    
    const styles = type === 'swatch' ?  {
      backgroundColor: value,
    } : {}

    const inputName = `cart-preview-${productName}-${attributeName}`
    const id = inputName + `-${index}`
    
    return(
      <div className="cart-preview-item-attribute-container">
        <input className="cart-preview-item-attribute-container__input" id={id} type="radio" 
          name={inputName} defaultChecked={pickedAttribute.pickedAttribute === item}/>
        <label className="cart-preview-item-attribute-container__label" 
          style={styles} htmlFor={id} onClick={() => {
            const pickedAttribute = {
              name: attributeName,
              type: type,
              pickedAttribute: item
            }
            setAttribute({name: productName, pickedAttribute: pickedAttribute})
          }}>{type !== 'swatch' && value}</label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    setAttribute: (productInfo: {
      name: string,
      pickedAttribute: PickedAttribute
    }) => dispatch(changePickedAttribute(productInfo))
  }
})

export default connect(null, mapDispatchToProps)(AttributeItem)