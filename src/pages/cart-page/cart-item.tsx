import messages from "../../Messages";
import { useIntl } from "react-intl";
import React from "react";

// Types
import { ItemProps } from "../../utilities/types";

// Styles
import { List } from "semantic-ui-react";
import {
  MiniTour,
  Image,
  TextBox,
  TourName,
  PriceBox,
  CompanyTitle,
} from "./cart-page.styles";

const CartItem: React.FunctionComponent<ItemProps> = ({ item }) => {
  const intl = useIntl();

  return (
    <MiniTour>
      <Image>
        <img src={item.tour.image} alt={item.tour.name} />
      </Image>
      <TextBox>
        <CompanyTitle>
          <p>{item.tour.company}</p>
        </CompanyTitle>
        <TourName>
          <p>{item.tour.name}</p>
        </TourName>

        <List>
          <List.Item>
            <List.Icon name="user outline" />
            <List.Content>
              {intl.formatMessage(messages.people)}: {item.quantity}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="clock outline" />
            <List.Content>
              {intl.formatMessage(messages.when)}: {item.date} {item.time}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="euro" />
            <List.Content>
              {intl.formatMessage(messages.ticketPrice)}: €
              {item.tour.ticketPrice}
            </List.Content>
          </List.Item>
        </List>
      </TextBox>
      <PriceBox>
        {item.quantity} x €{item.tour.ticketPrice}
      </PriceBox>
    </MiniTour>
  );
};

export default CartItem;
