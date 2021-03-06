import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../enities/interfaces/data";

const initialState: { products: CartProduct[] } = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    
    //find index of product in global state and change amount filed
    //delete poduct if amount <= 0
    changeAmountOfProduct(state, action) {
      const productIndex = state.products.findIndex(item => item.name === action.payload.name)
      
      state.products[productIndex].amount += action.payload.amount
      
      if(state.products[productIndex].amount <= 0) {
        state.products = state.products.filter(product => product.name !== action.payload.name)
      }
    },

    changePickedAttribute(state, action) {
      const productIndex = state.products.findIndex(item => item.name === action.payload.name)
      const attributeIndex = state.products[productIndex].pickedAttributes.findIndex(attribute => attribute.name === action.payload.pickedAttribute.name)
      state.products[productIndex].pickedAttributes[attributeIndex] = action.payload.pickedAttribute
    },

    clearCart(state) {
      state.products = []
    }
  }
})

export default cartSlice.reducer
export const { addProduct, changeAmountOfProduct, changePickedAttribute, clearCart } = cartSlice.actions