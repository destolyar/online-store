import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const currentProducts = createSlice({
  name: 'currentProducts',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default currentProducts.reducer
export const {} = currentProducts.actions