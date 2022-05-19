import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../../store"
import { CartPreviewProps, CartPreviewState } from "./enities/interfaces/cart-preview"
import '../../../styles/components/Navbar/CartPreview/CartPreview.scss'
import { CartPreviewItem } from "./CartPreviewItem"
import { TotalPrice } from "./TotalPrice"
import Buttons from "./Buttons"


class PreviewCart extends React.Component<CartPreviewProps, CartPreviewState> {
  state = {
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener("click", (e) => this.closeWindowEvent(e))
  }

  componentWillUnmount() {
    document.removeEventListener("click", (e) => this.closeWindowEvent(e))
  }

  changeWindowVisibility() {
    this.setState((state: CartPreviewState) => ({
      isOpen: !state.isOpen
    }))
  }

  //check element class name on having a class of container and items
  //if nothing found(or click on background) - close cart window
  closeWindowEvent(e: MouseEvent) {
    const { isOpen } = this.state
    const element = e.target as HTMLElement
    
    //i don't know how to implement it better, sorry for the shit-code...
    const inContainer = element.className.includes("cart-preview-item") 
    || element.className.includes("cart-preview-container") 
    || element.className.includes("item-amount")
    || element.className.includes("cart-preview-buttons")
    
    if((element.id === "cart-preview-background") || (!inContainer) && isOpen) {
      this.changeWindowVisibility()
    }
  }

  render() {
    const { products, currency } = this.props

    return(
      <div className="cart-preview-container">
        <input className="cart-preview-container__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
        <img className="cart-preview-container__image" src="/header-cart.png" alt="cart" onClick={() => this.changeWindowVisibility()}/>
        <div className="cart-preview-container__counter">{products.length}</div>
        <div className="cart-preview-container__cart-preview-background" id="cart-preview-background">
          <input className="cart-preview-container__cart-preview-background__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
          <div className="cart-preview-container__cart-preview-background__cart-preview" id="cart-preview">
            <h3 className="cart-preview-container__cart-preview-background__cart-preview__title">My bag: {products.length} items</h3>
            <div className="cart-preview-container__cart-preview-background__cart-preview__items">
              {products.map((product) => <CartPreviewItem key={product.name} product={product} currency={currency}/>)}
            </div>
            <TotalPrice products={products} currency={currency}/>
            <Buttons/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return { 
    currency: state.currencySlice.currency,
    products: state.cartSlice.products
  }
}

export default connect(mapStateToProps)(PreviewCart)