import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice"
import currencySlice from "./slices/currencySlice"
import currentProductsSlice from "./slices/currentProductsSlice"

const rootReducer = combineReducers({
  currencySlice,
  cartSlice,
  currentProductsSlice
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>