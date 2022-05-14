import { ProductPageProduct } from "../../../../enities/interfaces/data"

export interface ProductPageProps {
  match: {
    params: {
      id: string
    }
  },
}

export interface ProductPageState {
  product: ProductPageProduct,
}
