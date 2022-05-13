import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 'all'
}

const categorySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    }
  }
})

export default categorySlice.reducer
export const { setCategory } = categorySlice.actions