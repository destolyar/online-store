import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: {
    symbol: "$",
    label: "USD"
  }
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload
    }
  }
})

export default currencySlice.reducer
export const { setCurrency } = currencySlice.actions