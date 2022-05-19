import React from "react";
import { ItemAmountProps, ItemAmountState } from "./enities/interfaces/item-amount";
import '../../../styles/components/Navbar/CartPreview/ItemAmount.scss'
import { Action, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { changeAmountOfProduct } from "../../../slices/cartSlice";


class ItemAmount extends React.Component<ItemAmountProps, ItemAmountState> {
  increaseAmount() {

  }

  decreaseAmount() {

  }
  
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