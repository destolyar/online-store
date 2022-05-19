import React from "react";
import { TotalPriceProps, TotalPriceState } from "./enities/interfaces/total-price";
import '../../../styles/components/Navbar/CartPreview/TotalPrice.scss'

export class TotalPrice extends React.Component<TotalPriceProps, TotalPriceState> {
  state = {
    totalAmount: 0,
    totalProducts: 0,
    currentCurrency: ""
  }
  
  componentDidUpdate() {
    const { products, currency } = this.props
    const { totalProducts, currentCurrency } = this.state 

    const numOfProducts = products.map(product => product.amount).reduce((previosNum, currentNum) => previosNum + currentNum, 0)
    
    if(numOfProducts !== totalProducts || currentCurrency !== currency.symbol) {
      this.updateTotalAmount(numOfProducts)
    }
  }

  updateTotalAmount(numOfProducts: number) {
    const { products, currency } = this.props

    const prices = products.map(product => Math.trunc(+product.prices.filter(price => price.currency.symbol === currency.symbol)[0].amount) * product.amount)
    const totalPrice = prices.reduce((previosPrice, currentPrice) => previosPrice + currentPrice, 0)
    this.setState({
      totalAmount: totalPrice,
      totalProducts: numOfProducts,
      currentCurrency: currency.symbol
    })
  }

  render() {
    const { totalAmount, currentCurrency } = this.state

    return(
      <div className="cart-preview-total-price">
        <h3 className="cart-preview-total-price__title">Total</h3>
        <h3 className="cart-preview-total-price__value">{currentCurrency}{totalAmount}</h3>
      </div>
    )
  }
}