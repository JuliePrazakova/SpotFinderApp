// Types
import { CartItemType } from "../../LandingSection";
// Styles
import { Wrapper } from "./Item.styles";
import { Link } from "react-router-dom";
import React from "react";

export type IItemProps = {
  item: CartItemType;
};

const Item: React.FunctionComponent<IItemProps> = ({ item }) => (
  <Wrapper>
    <Link to={`/tours/${item.id}`}>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="text-box">
        <h3>{item.title}</h3>
        <p>{item.smallDes1}</p>
        <p>{item.smallDes2}</p> <h3>From ${item.price} per person</h3>
      </div>
    </Link>
  </Wrapper>
);

export default Item;
