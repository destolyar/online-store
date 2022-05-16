import React from "react"
import '../../styles/components/ItemPage/Attribute.scss'
import { AttributeItem } from "./AttributeItem"
import { AttributeProps, AttributeState } from "./enities/interfaces/attribute"

export class Attribute extends React.Component<AttributeProps, AttributeState> {
  componentDidMount() {
    console.log(this.props.attribute)
  }

  componentDidUpdate() {
    console.log(this.props.attribute)
  }

  render() {
    const { name, type, items } = this.props.attribute
    const { productName } = this.props

    return(
      <div className="attribute">
        <h3 className="attribute__title">{name}:</h3>
        <div className="attribute__items">
          {items.map((item, index) => <AttributeItem 
            key={index} 
            item={item} 
            type={type} 
            productName={productName} 
            index={index} 
            attributeName={name}/>)}
        </div>
      </div>
    )
  }
}