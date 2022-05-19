import React from "react";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { ItemAmountProps, ItemAmountState } from "../Navbar/CartPreview/enities/interfaces/item-amount";
import { changeAmountOfProduct } from "../../slices/cartSlice";


class ItemAmount extends React.Component<ItemAmountProps, ItemAmountState> {
  render() {
    const { amount, name } = this.props

    const { increaseAmount, decreaseAmount } = this.props.actions

    return(
      <div className="item-amount">
        <button className="item-amount__increase" onClick={() => increaseAmount(name)}>+</button>
        <div className="item-amount__value">{amount}</div>
        <button className="item-amount__decrease" onClick={() => decreaseAmount(name)}>−</button>
      </div>
    )
  }
}


const mapStateToDispatch = (dispatch: Dispatch<Action<string>>) => ({ 
  actions: {
    increaseAmount: (productName: string) => dispatch(changeAmountOfProduct({name: productName, amount: 1})),
    decreaseAmount: (productName: string) => dispatch(changeAmountOfProduct({name: productName, amount: -1})),
  }
})


export default connect(null, mapStateToDispatch)(ItemAmount)