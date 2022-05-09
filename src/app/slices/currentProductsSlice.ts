import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jopa: ['']
}

const currentProductsSlice = createSlice({
  name: 'currentProducts',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.jopa.push(action.payload)
    }
  }
})

export default currentProductsSlice.reducer
export const {} = currentProductsSlice.actions