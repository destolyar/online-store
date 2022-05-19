import { CartProduct, Currency } from "../../../../../enities/interfaces/data"

export interface CartPreviewProps {
  currency: Currency,
  products: CartProduct[]
}

export interface CartPreviewState {
  isOpen: boolean
}