import React from "react"
import parse from 'html-react-parser'
import '../../styles/components/ItemPage/ProductInfo.scss'
import { ProductInfoProps, ProductInfoState } from "./enities/interfaces/product-info"
import { connect } from "react-redux"
import { RootState } from "../../store"
import { Prices } from "../../enities/interfaces/data"
import { Attribute } from "./Attribute"

class ProductInfo extends React.Component<ProductInfoProps, ProductInfoState> {
  state = {
    price: 0,
    symbol: "",
    pickedAttributes: []
  }

  //we not set componentDidMount cos at first render we get 
  //initial state from ProductPage before data fetching 
  componentDidUpdate() {
    const previosSymbol = this.props.currency.symbol
    const currentSymbol = this.state.symbol

    if(previosSymbol !== currentSymbol) {
      this.setProductPrice()
    }
  }

  //find the price and set it in the state (like in the catalog item)
  setProductPrice() {
    const { prices } = this.props.product
    const { symbol } = this.props.currency

    const price: number = +prices.filter((item: Prices) => item.currency.symbol === symbol)[0].amount
    
    this.setState({
      price: Math.trunc(price),
      symbol: symbol 
    })
  }
  
  render() {
    const { 
      brand,
      name,
      description,
      attributes
    } = this.props.product

    const { symbol } = this.props.currency
    const { price } = this.state

    return(
      <section className="product-info">
        <div className="product-info__titles">
          <h3 className="product-info__titles__brand">{brand}</h3>
          <h3 className="product-info__titles__name">{name}</h3>
        </div>
        <div className="product-info__attributes">
          {attributes.map((attribute, index) => <Attribute 
            key={index} 
            attribute={attribute} 
            productName={name}/>)}
        </div>
        <div className="product-info__price">
          <h3 className="product-info__price__title">Price:</h3>
          <h3 className="product-info__price__amout">{symbol} {price}</h3>
        </div>
        <button className="product-info__add-product-button">
          add to cart
        </button>
        <div className="product-info__description">{parse(description)}</div>
      </section>
    )
  }
} 

const mapStateToProps = (state: RootState) => {
  return { 
    currency: state.currencySlice.currency
  }
}

export default connect(mapStateToProps)(ProductInfo)