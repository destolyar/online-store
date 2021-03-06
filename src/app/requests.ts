import { gql } from '@apollo/client'
import { client } from './apolloClient'

export const getProductsByCategory = (category: string) => {
  return client.query({
    query: gql`
      query getProductsByCategory {
        category(input: {title: "${category}"}) {
          name
          products {
            id
            name
            inStock
            brand
            gallery
            prices {
              currency {
                label,
                symbol
              }
              amount
            }
          }
        }
      }
    `
  }).then(item => item.data.category)
}

export const getCategories = () => {
  return client.query({
    query: gql`
      query getCategories {
        categories {
          name
        }
      }
    `
  }).then((i => i.data.categories.map(((i: {name: string}) => i.name))))
}

export const getCurrencies = () => {
  return client.query({
    query: gql`
      query getCurrencies {
        currencies {
          symbol
          label
        }
      }
    `
  }).then((i => i.data.currencies))
}

export const getProductById = (id: string) => {
  return client.query({
    query: gql`
      query getProductById {
        product(id: "${id}") {
          name
          inStock
          gallery
          description
          brand
          attributes {
            name
            type
            items {
              displayValue
              value
            }
          }
          prices {
            currency{
              label
              symbol
            }
            amount
          }
        }
      }
    `
  }).then((i => i.data.product))
}