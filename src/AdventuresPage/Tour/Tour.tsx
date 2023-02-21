// Types
import { TourItem } from "../AdventuresPage";
// Styles
import { Tour } from "../AdventuresPage.styles";
import { Button } from "../../App.styles";
import { List } from "semantic-ui-react";
import React from "react";

export type ICategoryListProps = {
  tour: TourItem;
};

const CategoryList: React.FunctionComponent<ICategoryListProps> = ({
  tour,
}) => (
  <Tour>
    <div>
      <img src={tour.image} alt={tour.name} />
      <div className="text-box">
        <h3>{tour.company}</h3>
        <p>{tour.name}</p>
        <List className="list">
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              {tour.city}, {tour.country}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="clock outline" />
            <List.Content>Duration: {tour.duration}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="check" />
            <List.Content>{tour.desc_short}</List.Content>
          </List.Item>
        </List>
        <b>From ${tour.ticket_price} per person</b>
      </div>
    </div>
    <Button>
      <a href="/adventures">Learn more</a>
    </Button>
  </Tour>
);

export default CategoryList;
