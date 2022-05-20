import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { CartProps, CartState } from "./enities/interfaces/cart";
import '../../styles/components/Cart/Cart.scss'
import Order from "./Order";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";

class Cart extends React.Component<CartProps, CartState> {
  render() {
    const { products, currency } = this.props
    return(
      <main className="cart">
        <h1 className="cart__title">Cart</h1>
        <div className="cart__items">
          {products.map(product => <CartItem key={product.name} product={product} currency={currency}/>)}
        </div>
        {(products.length === 0) ? <EmptyCart/> : <Order/>}
      </main>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currency: state.currencySlice.currency,
    products: state.cartSlice.products
  }
}

export default connect(mapStateToProps)(Cart)