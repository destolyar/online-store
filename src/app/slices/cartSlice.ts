import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default cartSlice.reducer
export const {} = cartSlice.actions