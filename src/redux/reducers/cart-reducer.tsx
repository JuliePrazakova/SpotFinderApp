import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../utilities/types";

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  totalPrice: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newOrder = action.payload;
      const existingOrder = state.itemsList.find(
        (order) => order.tour._id === newOrder.tour.id
      );
      if (state.itemsList.length > 0) {
        state.totalQuantity += 1;
      } else {
        state.totalQuantity = 1;
      }
      if (existingOrder) {
        existingOrder.quantity += newOrder.quantity;
        state.totalPrice += newOrder.tour.ticketPrice * newOrder.quantity;
      } else {
        state.itemsList.push({
          tour: newOrder.tour,
          quantity: newOrder.quantity,
          time: newOrder.time,
          date: newOrder.date,
        });
        state.totalPrice = newOrder.tour.ticketPrice * newOrder.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingOrder = state.itemsList.find(
        (order) => order.tour._id === id
      );
      if (existingOrder) {
        if (existingOrder.quantity === 1) {
          state.itemsList = state.itemsList.filter(
            (order) => order.tour._id !== id
          );
        } else {
          existingOrder.quantity--;
          state.totalPrice -= existingOrder.tour.ticketPrice;
        }
      }
    },
    showCart(state) {
      state.showCart = true;
    },
  },
});

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export default cartSlice;
