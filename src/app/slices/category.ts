import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 'all'
}

const category = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    }
  }
})

export default category.reducer
export const { setCategory } = category.actions