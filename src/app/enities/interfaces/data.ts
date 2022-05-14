export interface Currency {
  label: string,
  symbol: string
}

export interface Prices {
  currency: Currency,
  amount: string
}

export interface AttributestItemItem {
  displayValue: string,
  value: string
}

export interface AttributesItem {
  type: string,
  name: string,
  items: AttributestItemItem[]
}

export interface CatalogProduct {
  id: string,
  name: string,
  brand: string,
  inStock: boolean,
  gallery: string[],
  prices: Prices[]
}

export interface ProductPageProduct {
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  brand: string,
  attributes: AttributesItem[],
  prices: Prices[],
}

export const defaultProduct = {
  name: '',
  inStock: false,
  gallery: [],
  description: '',
  category: '',
  brand: '',
  prices: [],
  attributes: [],
}