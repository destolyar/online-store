import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../../store"
import { CartPreviewProps, CartPreviewState } from "../enities/interfaces/cart-preview"
import '../../../styles/components/Navbar/CartPreview/CartPreview.scss'
import { CartPreviewItem } from "./CartPreviewItem"


class PreviewCart extends React.Component<CartPreviewProps, CartPreviewState> {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.setCloseWindowEvent()
  }

  componentWillUnmount() {
    this.removeCloseWindowEvent()
  }

  changeWindowVisibility() {
    this.setState((state: CartPreviewState) => ({
      isOpen: !state.isOpen
    }))
  }

  setCloseWindowEvent() {
    document.addEventListener("click", (e) => this.closeWindowEvent(e))
  }

  removeCloseWindowEvent() {
    document.removeEventListener("click", (e) => this.closeWindowEvent(e))
  }

  closeWindowEvent(e: MouseEvent) {
    const { isOpen } = this.state
    const element = e.target as HTMLElement
    
    const inContainer = element.className.includes("cart-preview-item") || element.className.includes("cart-preview-container")
    
    if((element.id === "cart-preview-background") || (!inContainer) && isOpen) {
      this.changeWindowVisibility()
    }
  }

  render() {
    const { products, currency } = this.props
    const { isOpen } = this.state
    return(
      <div className="cart-preview-container" onClick={() => !isOpen && this.changeWindowVisibility()}>
        <input className="cart-preview-container__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
        <img className="cart-preview-container__image" src="/header-cart.png" alt="cart"/>
        <div className="cart-preview-container__counter">{products.length}</div>
        <div className="cart-preview-container__cart-preview-background" id="cart-preview-background">
          <input className="cart-preview-container__cart-preview-background__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
          <div className="cart-preview-container__cart-preview-background__cart-preview" id="cart-preview">
            <h3 className="cart-preview-container__cart-preview-background__cart-preview__title">My bag: {products.length} items</h3>
            <div className="cart-preview-container__cart-preview-background__cart-preview__items">
              {products.map((product) => <CartPreviewItem key={product.name} product={product} currency={currency}/>)}
            </div>
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