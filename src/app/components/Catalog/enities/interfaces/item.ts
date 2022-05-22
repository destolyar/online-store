import { CartProduct, CatalogProduct, Currency, ProductPageProduct } from "../../../../enities/interfaces/data";

export interface CatalogItemProps {
  product: CatalogProduct,
  currency: Currency,
  cartProducts: CartProduct[],
  actions: {
    setProduct: (newCartProduct: CartProduct, cartProducts: CartProduct[]) => void
  }
}

export interface CatalogItemState {
  price: number,
  symbol: string,
  defaultProduct: ProductPageProduct
}
