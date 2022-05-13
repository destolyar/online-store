import { CatalogProduct, Currency } from "../../../../enities/interfaces/data"

export interface CatalogProps {
  category: string,
  currency: Currency
}

export interface CatalogState {
  pickedCategory: string,
  products: CatalogProduct[]
}
