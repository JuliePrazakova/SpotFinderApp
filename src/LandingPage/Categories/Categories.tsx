// Types
import { CategoryItemType } from "../LandingSection";
// Styles
import { CategorySection } from "./Categories.styles";
import React from "react";

export type ICategoryItemProps = {
  category: CategoryItemType;
};

const CartItem: React.FunctionComponent<ICategoryItemProps> = ({
  category,
}) => (
  <CategorySection>
    <h3>{category.name}</h3>
    <div>
      <p>{category.description}</p>
    </div>
    <div className="btn">
      <a href="/adventures">Learn more</a>
    </div>
  </CategorySection>
);

export default CartItem;
