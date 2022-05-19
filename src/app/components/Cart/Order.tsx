import { Action, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../slices/cartSlice";

class Order extends React.Component {
  render() {
    return(
      <div className="order">
        <h3 className="">tax 21%: </h3>
        <h3 className="">Quanity: </h3>
        <h3 className="">Total: </h3>
        <button className=""></button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    clearCart: () => dispatch(clearCart())
  }
})

export default connect(null, mapDispatchToProps)(Order)