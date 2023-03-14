// Types
import { OrderItem } from "../../redux/reducers/cart-reducer";
// Styles
import React from "react";

export type ItemProps = {
  item: OrderItem;
};

const CartItem: React.FunctionComponent<ItemProps> = ({ item }) => (
  <div>
    <div>
      <h3>{item.tour.name}</h3>
      <div className="information">
        <p>Price: ${item.tour.ticketPrice}</p>
        <p>Total: ${(item.quantity * item.tour.ticketPrice).toFixed(2)}</p>
      </div>
    </div>
    <img src={item.tour.image} alt={item.tour.name} />
  </div>
);

export default CartItem;
