import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload)
    }
  }
})

export default cartSlice.reducer
export const { addProduct } = cartSlice.actions