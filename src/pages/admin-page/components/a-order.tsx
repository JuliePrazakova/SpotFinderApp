import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Container, Divider, Grid, List } from "semantic-ui-react";
import { PriceBox } from "../../cart-page/cart-page.styles";
import { OrderProps } from "../../../utilities/types";
import CartItem from "../../cart-page/cart-item";
import { Wrapper } from "../../landing-page/landing-section.styles";
import { Box } from "../../adventures-page/adventures-page.styles";
import { OrderBox, Title } from "../admin-page.styles";

const OrderComponent: React.FunctionComponent<OrderProps> = ({ order }) => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Box>
        <Container>
          <Title>
            <h1>
              {order?.firstname} {order?.lastname}
            </h1>
          </Title>
        </Container>

        <Grid columns={2}>
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
                      {intl.formatMessage(messages.orderPrice)}: €
                      {order?.cart.totalPrice}
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Content>
                      {intl.formatMessage(messages.orderedTours)}:{" "}
                      {order?.cart.totalQuantity}
                    </List.Content>
                  </List.Item>
                </List>
              </PriceBox>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Container>
          {order?.cart.itemsList.map((orderedTour) => (
            <OrderBox key={orderedTour.tour._id}>
              <CartItem item={orderedTour} key={orderedTour.tour._id} />
            </OrderBox>
          ))}
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OrderComponent;
