import React from "react"
import '../../styles/components/ItemPage/AttributeItem.scss'
import { AttributeItemProps, AttributeItemState } from "./enities/interfaces/attribute-item"

export class AttributeItem extends React.Component<AttributeItemProps, AttributeItemState> {
  //set default picked atributes
  componentDidMount() {
    const { index, type, attributeName, item } = this.props
    if(index === 0) {
      this.props.setAttribute(type, attributeName, item)
    }
  }
  render() {
    const { value, displayValue } = this.props.item
    const { type, productName, attributeName, index, item } = this.props

    const { setAttribute } = this.props

    const styles = type === 'swatch' ?  {
      backgroundColor: value,
      width: "40px",
      height: "40px" 
    } : {}

    const name = `${productName}-${attributeName}`
    const id = `${productName}-${attributeName}-${index}`.split(' ').join()
    

    return(
      <div className="attribute-item-container">
        <input className="attribute-item-container__input" defaultChecked={index === 0} type="radio" name={name} id={id} />
        <label className="attribute-item-container__label" 
          htmlFor={id} 
          style={styles}
          onClick={() => {
            setAttribute(type, attributeName, item)
          }}
          >{type !== 'swatch' && displayValue}</label>
      </div>
    )
  }
}