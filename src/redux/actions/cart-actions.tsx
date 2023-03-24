import { TourItem } from "../../utilities/types";
import { ADD_ITEM, DELETE_ITEM } from "../action-types";

const addToCart = (order: { tour: TourItem; quantity: number }) => ({
  type: ADD_ITEM,
  payload: {
    tour: order.tour,
    quantity: order.quantity,
  },
});

const removeFromCart = (order: { tour: TourItem; quantity: number }) => ({
  type: DELETE_ITEM,
  payload: {
    tour: order.tour,
    quantity: order.quantity,
  },
});

export { addToCart, removeFromCart };
