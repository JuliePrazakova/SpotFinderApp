import React, { useEffect, useState } from "react";
// import messages from "../../Messages";
// import { useIntl } from "react-intl";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";
import { Title } from "../login-components/login-components.styles";
import { Subtitle } from "../adventures-page/adventure.styles";
import Order from "./components/order";
import axios from "axios";
import { OrderItemWithId } from "../../utilities/types";
import { Flex } from "./orders-page.styles";
import { Menu, MenuItemProps, Segment } from "semantic-ui-react";

// Styles

const OrdersPage = () => {
  const [activeItem, setActiveItem] = useState<string>("orders");
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

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) =>
    setActiveItem(name as string);

  return (
    <>
      <Header visible={false} />
      <BackgroundCover />
      <Title>Admin page</Title>
      <Subtitle>Orders page</Subtitle>

      <Segment.Group horizontal>
        <Menu pointing secondary vertical>
          <Menu.Item
            name="orders"
            active={activeItem === "orders"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="customers"
            active={activeItem === "customers"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="tours"
            active={activeItem === "tours"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="companies"
            active={activeItem === "companies"}
            onClick={handleItemClick}
          />
        </Menu>

        <Flex>
          {activeItem === "orders" ? (
            <>
              {orders?.map((order) => (
                <div key={order._id}>
                  <Order order={order} key={order._id} />
                </div>
              ))}
            </>
          ) : (
            <div> jahoda</div>
          )}
        </Flex>
      </Segment.Group>
      <Footer />
    </>
  );
};

export default OrdersPage;
