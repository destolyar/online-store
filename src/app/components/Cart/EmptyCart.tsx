import React from "react";
import '../../styles/components/Cart/EmptyCart.scss'

export class EmptyCart extends React.Component {
  render() {
    return(
      <section className="empty-cart">
        <h1 className="empty-cart__title"> You don't have any products in cart!</h1>
      </section>
    )
  }
}