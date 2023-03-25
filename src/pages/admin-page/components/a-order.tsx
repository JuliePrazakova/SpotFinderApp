import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Container, Grid, List, Segment } from "semantic-ui-react";
import { CompanyTitle, PriceBox } from "../../cart-page/cart-page.styles";
import { OrderProps } from "../../../utilities/types";
import CartItem from "../../cart-page/cart-item";

const OrderComponent: React.FunctionComponent<OrderProps> = ({ order }) => {
  const intl = useIntl();

  return (
    <Segment>
      <Container>
        <CompanyTitle>
          <p>
            {order?.firstname} {order?.lastname}
          </p>
          <br />
        </CompanyTitle>
      </Container>

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>{order?.email}</List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="phone" />
                <List.Content>{order?.phone}</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <PriceBox>
              <List>
                <List.Item>
                  <List.Content>
                    {intl.formatMessage(messages.total)}: €
                    {order?.cart.totalPrice}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    {intl.formatMessage(messages.total)}:{" "}
                    {order?.cart.totalQuantity}
                  </List.Content>
                </List.Item>
              </List>
            </PriceBox>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {order?.cart.itemsList.map((orderedTour) => (
              <div key={orderedTour.tour._id}>
                <CartItem item={orderedTour} key={orderedTour.tour._id} />
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default OrderComponent;
