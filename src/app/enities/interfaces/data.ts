export interface Currency {
  label: string,
  symbol: string
}

export interface Prices {
  currency: Currency,
  amount: string
}

export interface CatalogProduct {
  id: string,
  name: string,
  brand: string,
  inStock: boolean,
  gallery: string[],
  prices: Prices[]
}