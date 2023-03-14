import { createSlice } from "@reduxjs/toolkit";
import { TourItem } from "../../pages/adventures-page/tour/tour";

export type OrderItem = {
  tour: TourItem;
  quantity: number;
  time: number;
  date: number;
};
export type CartState = {
  itemsList: Array<OrderItem>;
  totalQuantity: number;
  totalPrice: number;
  showCart: boolean;
};
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
        (order) => order.tour.id === newOrder.tour.id
      );
      console.log("tadyyyyyy je redux", newOrder);
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
        state.totalQuantity = 1;
        state.totalPrice = newOrder.tour.ticketPrice * newOrder.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const existingOrder = state.itemsList.find(
        (order) => order.tour.id === id
      );
      if (existingOrder) {
        if (existingOrder.quantity === 1) {
          state.itemsList = state.itemsList.filter(
            (order) => order.tour.id !== id
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
