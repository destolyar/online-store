import React from "react";
import { Prices } from "../../enities/interfaces/data";
import { ItemPriceProps, ItemPriceState } from "../Navbar/CartPreview/enities/interfaces/item-price";
import '../../styles/components/Cart/ItemPrice.scss'


export class ItemPrice extends React.Component<ItemPriceProps, ItemPriceState> {
  state = {
    price: 0,
    symbol: ""
  }
  
  componentDidMount() {
    this.setProductPrice()
  }

  componentDidUpdate() {
    const currentSymbol = this.props.symbol
    const prevSymbol = this.state.symbol

    if(prevSymbol !== currentSymbol) {
      this.setProductPrice()
    }
  }

  setProductPrice() {
    const { prices, symbol } = this.props

    const price: number = +prices.filter((item: Prices) => item.currency.symbol === symbol)[0].amount
    
    this.setState({
      price: Math.trunc(price),
      symbol: symbol 
    })
  }
  
  render() {
    const { symbol, price } = this.state
    return(
      <h3 className="cart-item-price">{symbol}{price}</h3>
    )
  }
}