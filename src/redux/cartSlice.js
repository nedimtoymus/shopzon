import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = (key) => {
  let cart = localStorage.getItem(key);
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage() ,
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isItemCart = state.carts.find((item) => item.id === action.payload.id);
      if (isItemCart) {
        const tempCart = state.carts.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice: item.price * (item.quantity + action.payload.quantity),
              }
            : item
        );
        state.carts = tempCart;
        storeInLocalStorage(state.cart);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.price * cartItem.quantity;
      }, 0);

      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
