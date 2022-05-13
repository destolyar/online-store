import { Action, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { Currency } from "../../enities/interfaces/data";
import { getCurrencies } from "../../requests";
import { setCurrency } from "../../slices/currencySlice";
import { RootState } from "../../store";
import '../../styles/components/Navbar/CurrencyDropdown.scss'
import { 
  CurrencyDropdownProps, 
  CurrencyDropdownState 
} from "./enities/interfaces/currency-dropdown";

export class CurrencyDropdown extends React.Component<CurrencyDropdownProps, CurrencyDropdownState> {
  state = {
    currencies: [],
    isOpen: false
  }
  
  //fetching products and auto-closing event setting
  componentDidMount() {
    getCurrencies().then(i => this.setState({currencies: i}))
    document.addEventListener("click", (e) => {
      const element = e.target as HTMLElement
      if((!element.className.includes("currency-dropdown-container")) && this.state.isOpen) {
        this.closeDropdown()
      }
    })
  }

  //close or open dropdown
  closeDropdown() {
    this.setState((state: CurrencyDropdownState) => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    const {changeCurrency} = this.props.actions

    return(
      <div className="currency-dropdown-container">
        <div className="currency-dropdown-container__info">
          <h3 className="currency-dropdown-container__info__symbol">{this.props.currency.symbol}</h3>
          <span className="currency-dropdown-container__info__open-cart" 
            onClick={() => this.closeDropdown()}>&#10095;</span>
        </div>
        <input className="currency-dropdown-container__checkbox" 
          type="checkbox" checked={this.state.isOpen} onChange={() => {}}/>
        <div className="currency-dropdown-container__currency-dropdown">
            {this.state.currencies.map((item: Currency) => 
              <div className="currency-dropdown-container__currency-dropdown__item" 
                key={item.label} 
                onClick={() => {
                  changeCurrency({
                    label: item.label,
                    symbol: item.symbol
                  })
                  this.closeDropdown()  
                }}>
                {item.symbol + ' ' + item.label}
              </div>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {currency: state.currencySlice.currency}
}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
  actions: {
    changeCurrency: (currency: Currency) => dispatch(setCurrency(currency))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropdown)