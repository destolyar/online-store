import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const currency = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default currency.reducer
export const {} = currency.actions