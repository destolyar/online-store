import { CartProduct, Currency, PickedAttribute, ProductPageProduct } from "../../../../enities/interfaces/data";

export interface ProductInfoProps {
  product: ProductPageProduct,
  currency: Currency,
  cartProducts: CartProduct[],
  actions: {
    setProduct: (newCartProduct: CartProduct, cartProducts: CartProduct[]) => void
  }
}

export interface ProductInfoState {
  price: number,
  symbol: string
  pickedAttributes: PickedAttribute[]
}