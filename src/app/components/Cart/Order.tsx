import { Action, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../slices/cartSlice";
import { RootState } from "../../store";
import '../../styles/components/Cart/Order.scss'
import { CartOrderProps, CartOrderState } from "./enities/interfaces/order";

class Order extends React.Component<CartOrderProps, CartOrderState> {
  state = {
    totalAmount: 0,
    totalProducts: 0,
    currentCurrency: ""
  }

  componentDidMount() {
    const { products } = this.props

    const numOfProducts = products.map(product => product.amount).reduce((previosNum, currentNum) => previosNum + currentNum, 0)

    this.updateTotalAmount(numOfProducts)
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
    const { totalAmount, currentCurrency, totalProducts } = this.state
    const { clearCart } = this.props.actions

    return(
      <div className="order">
        <h3 className="order__tax">tax 21%: <span className="order__tax__value">
          {currentCurrency}{totalAmount * 0.21}
        </span></h3>
        <h3 className="order__quanity">quanity: <span className="order__quanity__value">{totalProducts}</span></h3>
        <h3 className="order__total-amount">total: {currentCurrency}{totalAmount}</h3>
        <button className="order__button" onClick={() => clearCart()}>order</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    clearCart: () => dispatch(clearCart())
  }
})

const mapStateToProps = (state: RootState) => {
  return { 
    currency: state.currencySlice.currency,
    products: state.cartSlice.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)