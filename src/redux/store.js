import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    categories : categorySlice,
    products : productSlice,
    carts: cartSlice,
  },
})