import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { List } from "semantic-ui-react";
import {
  CompanyTitle,
  MiniTour,
  PriceBox,
  TourName,
  TextBox,
} from "../../cart-page/cart-page.styles";
import { OrderProps } from "../../../utilities/types";

const OrderComponent: React.FunctionComponent<OrderProps> = ({ order }) => {
  const intl = useIntl();

  return (
    <MiniTour>
      <TextBox>
        <CompanyTitle>
          <p>
            {order.firstname} {order.lastname}
          </p>
        </CompanyTitle>
        <TourName>
          <p>{order.email}</p>
        </TourName>

        <List>
          <List.Item>
            <List.Icon name="user outline" />
            <List.Content>
              {intl.formatMessage(messages.email)}: {order.email}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="clock outline" />
            <List.Content>
              {intl.formatMessage(messages.phoneNumber)}: {order.email}
            </List.Content>
          </List.Item>
        </List>
      </TextBox>

      <PriceBox>
        {intl.formatMessage(messages.total)}: €{order.cart.cart.totalPrice}
        {intl.formatMessage(messages.total)}:{order.cart.cart.totalQuantity}
      </PriceBox>
    </MiniTour>
  );
};

export default OrderComponent;
