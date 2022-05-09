import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default currencySlice.reducer
export const {} = currencySlice.actions