import { currency } from "../../../../enities/interfaces/data"

export interface CurrencyDropdownProps {
  currency: currency,
  actions: {
    changeCurrency: (currency: currency) => void
  }
}

export interface CurrencyDropdownState {
  currencies: currency[]
  isOpen: boolean
}