import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Prices } from "../../enities/interfaces/data"
import { CatalogItemProps, CatalogItemState } from "./enities/interfaces/item"
import { OutOfStock } from "./OutOfStock"
import '../../styles/components/Catalog/catalog-item.scss'


class CatalogItem extends React.Component<CatalogItemProps & RouteComponentProps<any>, CatalogItemState> {
  state = {
    price: 0,
    symbol: "$"
  }

  componentDidMount() {
    this.setProductPrice()
  }

  componentDidUpdate() {
    const previosSymbol = this.props.currency.symbol
    const currentSymbol = this.state.symbol

    if(previosSymbol !== currentSymbol) {
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

  redirectToItemPage() {
    this.props.history.push(`/product/${this.props.product.id}`)
  }

  render() {
    const { 
    name,
    brand,
    inStock,
    gallery,
    } = this.props.product

    const { symbol } = this.props.currency
    const { price } = this.state

    return(
      <div className="catalog-item-container" onClick={() => this.redirectToItemPage()}>
        <div className="catalog-item-container__cart">
          <img src="./cart.png" alt="Product cart" />
        </div>
        <div className="catalog-item-container__item">
          {(inStock) ? <img className="catalog-item-container__item__image" src={gallery[0]} alt="Product image"/> : 
            <OutOfStock><img className="catalog-item-container__item__image" src={gallery[0]} alt="Product image"/></OutOfStock>}
          <p className="catalog-item-container__item__brand">{brand}</p>
          <p className="catalog-item-container__item__name">{name}</p>
          <p className="catalog-item-container__item__price">{symbol + ' ' + price}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(CatalogItem)