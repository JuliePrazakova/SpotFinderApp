import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Container, Grid, List, Segment } from "semantic-ui-react";
import { CompanyTitle, PriceBox } from "../../cart-page/cart-page.styles";
import { OrdersListProps } from "../../../utilities/types";
import { Button } from "../../../App.styles";

const OrderComponent: React.FunctionComponent<OrdersListProps> = ({
  order,
  onOrderClick,
}) => {
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
          <Grid.Column>
            <Button onClick={() => order && onOrderClick(order)}>
              View more
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default OrderComponent;