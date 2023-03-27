import React, { useEffect, useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Container, Grid, List, Segment } from "semantic-ui-react";
import { CompanyTitle, PriceBox } from "../../cart-page/cart-page.styles";
import { OrderItemWithId, OrdersListProps } from "../../../utilities/types";
import { Button } from "../../../App.styles";
import axios from "axios";

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

const Orders: React.FunctionComponent<OrdersListProps> = ({ onOrderClick }) => {
  const [orders, setOrders] = useState<OrderItemWithId[]>([]);

  // get data from backend
  useEffect(() => {
    const API_URL = "http://localhost:5001/orders";

    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const orderList: OrderItemWithId[] = response.data.map(
            (item: OrderItemWithId) => ({
              _id: item._id.toString(),
              cart: item.cart,
              firstname: item.firstname,
              lastname: item.lastname,
              email: item.email,
              phone: item.phone,
            })
          );

          setOrders(orderList);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {orders?.map((order) => (
        <div key={order._id}>
          <OrderComponent
            order={order}
            key={order._id}
            onOrderClick={onOrderClick}
          />
        </div>
      ))}
    </>
  );
};

export default Orders;
