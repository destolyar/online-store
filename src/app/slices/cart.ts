import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default cart.reducer
export const {} = cart.actions