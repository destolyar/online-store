import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { CartProduct, defaultProduct, Prices } from "../../enities/interfaces/data"
import { CatalogItemProps, CatalogItemState } from "./enities/interfaces/item"
import { OutOfStock } from "./OutOfStock"
import '../../styles/components/Catalog/CatalogItem.scss'
import { getProductById } from "../../requests"
import { RootState } from "../../store"
import { Action, Dispatch } from "@reduxjs/toolkit"
import { connect } from "react-redux"
import { addProduct } from "../../slices/cartSlice"


class CatalogItem extends React.Component<CatalogItemProps & RouteComponentProps<any>, CatalogItemState> {
  state = {
    price: 0,
    symbol: "$",
    defaultProduct: defaultProduct
  }

  componentDidMount() {
    const { id } = this.props.product
    getProductById(id).then(i => this.setState({
      defaultProduct: i
    }))

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

  addDefaultProductToCart () {
    const { defaultProduct } = this.state
    const { inStock } = defaultProduct

    const { cartProducts } = this.props
    const { setProduct } = this.props.actions

    const pickedAttributes = defaultProduct.attributes.map((item: any) => ({
      name: item.name,
      type: item.type,
      pickedAttribute: item.items[0]
    }))

    const newCartProduct: CartProduct = Object.assign({}, defaultProduct, {amount: 1, pickedAttributes: pickedAttributes})
    inStock && setProduct(newCartProduct, cartProducts)
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
      <div className="catalog-item-container">
        {inStock && <div className="catalog-item-container__cart">
          <img src="./cart.png" alt="Product cart" onClick={() => this.addDefaultProductToCart()}/>
        </div>} 
        <div className="catalog-item-container__item" onClick={() => this.redirectToItemPage()}>
          {!inStock && <OutOfStock/>}
          <img className="catalog-item-container__item__image" src={gallery[0]} alt="Product image"/>
          <div className="catalog-item-container__item__info">
            <p className="catalog-item-container__item__info__brand">{brand}</p>
            <p className="catalog-item-container__item__info__name">{name}</p>
            <p className="catalog-item-container__item__info__price">{symbol}{price}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return { 
    cartProducts: state.cartSlice.products
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    //Check in product do we have this product in global state. If it not true - set it
    setProduct: (newCartProduct: CartProduct, cartProducts: CartProduct[]) => {
      const soldProducts = cartProducts.filter((item: CartProduct) => item.name === newCartProduct.name
      )

      if(soldProducts.length === 0 || undefined) {
        dispatch(addProduct(newCartProduct))
      }
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CatalogItem))