import { Prices } from "../../../../../enities/interfaces/data";

export interface ItemPriceProps {
  prices: Prices[],
  symbol: string
}

export interface ItemPriceState {
  price: number,
  symbol: string
}