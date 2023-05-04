import React, { useEffect, useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";
import { useAuth0 } from "@auth0/auth0-react";

// Styles
import { Button, Container, Grid, List, Segment } from "semantic-ui-react";
import { PriceBox } from "../../cart-page/cart-page.styles";
import { OrderItemWithId, OrdersListProps } from "../../../utilities/types";
import axios from "axios";
import { Title } from "../admin-page.styles";
import DeleteModal from "./delete-modal";

const OrderComponent: React.FunctionComponent<OrdersListProps> = ({
  order,
  onOrderClick,
}) => {
  const intl = useIntl();

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenDeleteConfirm = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteConfirm = () => {
    setDeleteModalOpen(false);
  };

  return (
    <Segment>
      <Container>
        <Title>
          <p>
            {order?.firstname} {order?.lastname}
          </p>
          <div>
            <Button
              basic
              circular
              onClick={() => order && onOrderClick(order)}
              icon="edit"
            />
            <Button
              basic
              circular
              onClick={handleOpenDeleteConfirm}
              icon="trash"
            />
          </div>

          <br />
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
      <DeleteModal
        title="Are you sure you want to delete this order?"
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteConfirm}
        _id={order?._id.toString()}
        url="admin/deleteOrder"
      />
    </Segment>
  );
};

const Orders: React.FunctionComponent<OrdersListProps> = ({ onOrderClick }) => {
  const [orders, setOrders] = useState<OrderItemWithId[]>([]);
  const { getAccessTokenSilently } = useAuth0();

  // get data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        const response = await axios.get("http://localhost:5001/admin/orders", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getAccessTokenSilently]);

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
