import React from "react"
import '../../styles/components/ItemPage/AttributeItem.scss'
import { AttributeItemProps, AttributeItemState } from "./enities/interfaces/attribute-item"

export class AttributeItem extends React.Component<AttributeItemProps, AttributeItemState> {
  render() {
    const { value, displayValue } = this.props.item
    const { type, productName, attributeName, index } = this.props

    const { setAttribute } = this.props

    const styles = type === 'swatch' ?  {
      backgroundColor: value,
      width: "45px",
      height: "45px" 
    } : {}

    const name = `${productName}-${type}`
    const id = `${productName}-${attributeName}-${index}`.split(' ').join()

    return(
      <div className="attribute-item-container">
        <input className="attribute-item-container__input" type="radio" name={name} id={id} />
        <label className="attribute-item-container__label" 
          htmlFor={id} 
          style={styles}
          onClick={() => {
            setAttribute(type, attributeName, this.props.item)
          }}
          >{type !== 'swatch' && displayValue}</label>
      </div>
    )
  }
}