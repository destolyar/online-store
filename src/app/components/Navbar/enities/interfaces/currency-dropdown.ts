import { Currency } from "../../../../enities/interfaces/data"

export interface CurrencyDropdownProps {
  currency: Currency,
  actions: {
    changeCurrency: (currency: Currency) => void
  }
}

export interface CurrencyDropdownState {
  currencies: Currency[]
  isOpen: boolean
}