import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../../store"
import { CartPreviewProps, CartPreviewState } from "../enities/interfaces/cart-preview"
import '../../../styles/components/Navbar/CartPreview/CartPreview.scss'


class PreviewCart extends React.Component<CartPreviewProps, CartPreviewState> {
  state = {
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      const element = e.target as HTMLElement
      //To do: change class name to item class 
      if((!element.className.includes("cart-preview-container")) && this.state.isOpen) {
        this.closeWindow()
      } else if((element.id === "cart-preview-background") && this.state.isOpen) {
        this.closeWindow()
      }
    })
  }

  closeWindow() {
    this.setState((state: CartPreviewState) => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    const { products } = this.props
    return(
      <div className="cart-preview-container">
        <input className="cart-preview-container__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
        <img className="cart-preview-container__image" src="/header-cart.png" alt="cart" onClick={() => this.closeWindow()}/>
        <div className="cart-preview-container__cart-preview-background" id="cart-preview-background">
          <input className="cart-preview-container__cart-preview-background__checkbox" type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
          <div className="cart-preview-container__cart-preview-background__cart-preview" id="cart-preview">
            {products.map((product) => product.name)}
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