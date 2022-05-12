import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice"
import categorySlice from "./slices/categorySlice"
import currencySlice from "./slices/currencySlice"
import currentProductsSlice from "./slices/currentProductsSlice"

const rootReducer = combineReducers({
  currencySlice,
  cartSlice,
  currentProductsSlice,
  categorySlice
})

export const store = configureStore({
  reducer: rootReducer
})

export const dispatch = store.dispatch
export const select = store.getState

export type RootState = ReturnType<typeof store.getState>