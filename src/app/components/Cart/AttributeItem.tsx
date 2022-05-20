import React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { CartPreviewAttributeItemProps, CartPreviewAttributeItemState } from "../Navbar/CartPreview/enities/interfaces/attribute-item";
import { changePickedAttribute } from "../../slices/cartSlice";
import { PickedAttribute } from "../../enities/interfaces/data";
import '../../styles/components/Cart/AttributeItem.scss'


class AttributeItem extends React.Component<CartPreviewAttributeItemProps, CartPreviewAttributeItemState> {
  render() {
    const { item } = this.props
    const { value } = item
    const { type, pickedAttribute, attributeName, productName, index } = this.props

    const { setAttribute } = this.props.actions
    
    const styles = type === 'swatch' ?  {
      width: "35px",
      height: "35px",
      backgroundColor: value,
    } : {}

    const inputName = `cart-${productName}-${attributeName}`
    const id = inputName + `-${index}`
    
    return(
      <div className="cart-item-attribute-container">
        <input className="cart-item-attribute-container__input" id={id} type="radio" 
          name={inputName} checked={pickedAttribute.pickedAttribute === item} onChange={() => {}}/>
        <label className="cart-item-attribute-container__label" 
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