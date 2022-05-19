import { CartProduct, Currency } from "../../../../../enities/interfaces/data";

export interface TotalPriceProps {
  products: CartProduct[],
  currency: Currency
}

export interface TotalPriceState {
  totalAmount: number,
  totalProducts: number,
  currentCurrency: string
}