import { CatalogProduct, Currency } from "../../../../enities/interfaces/data";

export interface CatalogItemProps {
  product: CatalogProduct,
  currency: Currency
}

export interface CatalogItemState {
  price: number,
  symbol: string
}
