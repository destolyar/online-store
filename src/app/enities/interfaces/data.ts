export interface Currency {
  label: string,
  symbol: string
}

export interface Prices {
  currency: Currency,
  amount: string
}

export interface AttributeItem {
  displayValue: string,
  value: string
}

export interface Attribute{
  type: string,
  name: string,
  items: AttributeItem[]
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
  attributes: Attribute[],
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