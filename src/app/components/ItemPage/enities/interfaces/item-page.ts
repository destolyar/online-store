import { ItemPageProduct } from "../../../../enities/interfaces/data"

export interface ItemPageProps {
  match: {
    params: {
      id: string
    }
  }
}

export interface ItemPageState {
  product: ItemPageProduct
}
