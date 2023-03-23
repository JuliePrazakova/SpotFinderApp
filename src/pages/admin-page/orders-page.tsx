import React, { useEffect, useState } from "react";
// import messages from "../../Messages";
// import { useIntl } from "react-intl";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";
import { Title } from "../login-components/login-components.styles";
import { Subtitle } from "../adventures-page/adventure.styles";
import { Grid } from "semantic-ui-react";
import Order from "./components/order";
import axios from "axios";
import { OrderItemWithId } from "../../utilities/types";

// Styles

const OrdersPage = () => {
  //const intl = useIntl();
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
              id: item.id,
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

  console.log("tady jsou orders:", orders);

  return (
    <>
      <Header visible={false} />
      <BackgroundCover />
      <Title>Admin page</Title>
      <Subtitle>Orders page</Subtitle>

      <Grid>
        <Grid.Column width={8}>
          {orders?.map((order) => (
            <div key={order.id}>
              <Order order={order} key={order.id} />
            </div>
          ))}
        </Grid.Column>
      </Grid>

      <Footer />
    </>
  );
};

export default OrdersPage;
