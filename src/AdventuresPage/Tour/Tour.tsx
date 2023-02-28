import React from "react";
import { Link } from "react-router-dom";
import messages from "../../Messages";
import { useIntl } from "react-intl";
import paths from "../../utilities/pathnames";

// Types
import { TourItem } from "../AdventuresPage";

// Styles
import { Tour, TourBox, TextBox } from "../AdventuresPage.styles";
import { Button } from "../../App.styles";
import { List } from "semantic-ui-react";

export type CategoryListProps = {
  tour: TourItem;
};

const CategoryList: React.FunctionComponent<CategoryListProps> = ({ tour }) => {
  const intl = useIntl();
  const price = tour.ticket_price;

  return (
    <Tour>
      <TourBox>
        <img src={tour.image} alt={tour.name} />

        <TextBox>
          <h3>{tour.company}</h3>
          <p>{tour.name}</p>

          <List>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                {tour.city}, {tour.country}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="clock outline" />
              <List.Content>
                {intl.formatMessage(messages.duration)}: {tour.duration}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="check" />
              <List.Content>{tour.desc_short}</List.Content>
            </List.Item>
          </List>

          <p>{intl.formatMessage(messages.pricePerPerson, { price })}</p>
        </TextBox>
      </TourBox>

      <Button>
        <Link to={paths["adventure-detail"].path.replace(":id", tour.id)}>
          {intl.formatMessage(messages.learnMore)}
        </Link>
      </Button>
    </Tour>
  );
};

export default CategoryList;
