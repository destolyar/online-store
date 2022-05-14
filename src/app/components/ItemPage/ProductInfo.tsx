import React from "react"
import parse from 'html-react-parser'
import '../../styles/components/ItemPage/ProductInfo.scss'
import { ProductInfoProps, ProductInfoState } from "./enities/interfaces/product-info"

export class ProductInfo extends React.Component<ProductInfoProps, ProductInfoState> {
  render() {
    const { 
      brand,
      name,
      description,
    } = this.props.product

    return(
      <section className="product-info">
        <div className="product-info__titles">
          <h3 className="product-info__titles__brand">{brand}</h3>
          <h3 className="product-info__titles__name">{name}</h3>
        </div>
        <div className="product-info__attributes">

        </div>
        <div className="product-info__price">
          <h3 className="product-info__price__title">Price:</h3>
          <h3 className="product-info__price__amout">{}</h3>
        </div>
        <button className="product-info__add-product-button">
          add to cart
        </button>
        <div className="product-info__description">{parse(description)}</div>
      </section>
    )
  }
} 