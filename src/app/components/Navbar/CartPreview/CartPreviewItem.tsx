import React from "react";
import { CartPreviewItemProps, CartPreviewItemState } from "../enities/interfaces/cart-preview-item";
import '../../../styles/components/Navbar/CartPreview/CartPreviewItem.scss'
import { Prices } from "../../../enities/interfaces/data";

export class CartPreviewItem extends React.Component<CartPreviewItemProps, CartPreviewItemState> {
  state = {
    price: 0,
    symbol: ""
  }
  
  componentDidMount() {
    this.setProductPrice()
  }

  componentDidUpdate() {
    const currentSymbol = this.props.currency.symbol
    const prevSymbol = this.state.symbol

    if(prevSymbol !== currentSymbol) {
      this.setProductPrice()
    }
  }

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
    const { brand, name } = this.props.product
    const { price, symbol } = this.state

    return(
      <div className="cart-preview-item">
        <div className="cart-preview-item__titles">
          <h3 className="cart-preview-item__titles__brand">{brand}</h3>
          <h3 className="cart-preview-item__titles__name">{name}</h3>  
          <h3 className="cart-preview-item__titles__name">{symbol}{price}</h3>
        </div>
      </div>
    )
  }
}