import { CartProduct, Currency } from "../../../../enities/interfaces/data"

export interface CartOrderProps {
  products: CartProduct[],
  currency: Currency,
  actions: {
    clearCart: () => void
  }
}

export interface CartOrderState {
  totalAmount: number,
  totalProducts: number,
  currentCurrency: string
}