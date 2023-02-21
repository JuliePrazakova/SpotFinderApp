// Types
import { TourItem } from "../AdventuresPage";
// Styles
import { Wrapper } from "../AdventuresPage.styles";
import { Button } from "../../App.styles";
import React from "react";

export type ICategoryListProps = {
  tour: TourItem;
};

const CategoryList: React.FunctionComponent<ICategoryListProps> = ({
  tour,
}) => (
  <Wrapper>
    <div>
      <img src={tour.image} alt={tour.name} />
    </div>
    <div className="text-box">
      <h3>{tour.name}</h3>
      <p>{tour.desc_short}</p>
      <p>{tour.desc_long}</p> <h3>From ${tour.ticket_price} per person</h3>
    </div>
    <Button>
      <a href="/adventures">Learn more</a>
    </Button>
  </Wrapper>
);

export default CategoryList;
