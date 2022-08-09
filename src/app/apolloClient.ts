import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: 'https://online-store-endpoints.herokuapp.com/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  link: new HttpLink({
    uri: 'https://online-store-endpoints.herokuapp.com/',
    fetchOptions: {
      mode: 'no-cors'
    }
  })
})