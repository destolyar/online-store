import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cart from "./slices/cart"
import category from "./slices/category"
import currency from "./slices/currency"
import currentProducts from "./slices/currentProducts"

const rootReducer = combineReducers({
  currency,
  cart,
  currentProducts,
  category
})

export const store = configureStore({
  reducer: rootReducer
})

export const dispatch = store.dispatch
export const select = store.getState

export type RootState = ReturnType<typeof store.getState>