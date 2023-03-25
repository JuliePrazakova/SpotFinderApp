import React, { useEffect, useState } from "react";
// import messages from "../../Messages";
// import { useIntl } from "react-intl";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";
import { Title } from "../login-components/login-components.styles";
import { Subtitle } from "../adventures-page/adventure.styles";
import Orders from "./components/a-orders";
import Order from "./components/a-order";
import axios from "axios";
import { OrderItemWithId, TourItem } from "../../utilities/types";
import { Flex } from "./admin-page.styles";
import { Menu, MenuItemProps, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";
import Tours from "./components/a-tours";
import TourComponent from "../adventures-page/tour/tour";

// Styles

const OrdersPage = () => {
  const [activeItem, setActiveItem] = useState<string>("orders");
  const [orders, setOrders] = useState<OrderItemWithId[]>([]);
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<OrderItemWithId>();
  const [selectedTour, setSelectedTour] = useState<TourItem>();

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

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name as string);
    setSelectedOrder(undefined);
    setSelectedTour(undefined);
    navigate(`${paths.admin.path}`);
  };

  console.log(orders);

  const handleOrderClick = (order: OrderItemWithId) => {
    setSelectedOrder(order);
    navigate(`${paths["order-detail"].path.replace(":orderId", order._id)}`);
  };

  const handleTourClick = (tour: TourItem) => {
    setSelectedTour(tour);
    navigate(`${paths["company-detail"].path.replace(":companyId", tour._id)}`);
  };

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

        {activeItem === "orders" ? (
          <>
            {selectedOrder ? (
              <Order order={selectedOrder} />
            ) : (
              <Flex>
                {orders?.map((order) => (
                  <div key={order._id}>
                    <Orders
                      order={order}
                      key={order._id}
                      onOrderClick={handleOrderClick}
                    />
                  </div>
                ))}
              </Flex>
            )}
          </>
        ) : activeItem === "tours" ? (
          <>
            {selectedTour ? (
              <TourComponent tour={selectedTour} btn={false} />
            ) : (
              <Flex>
                <Tours onTourClick={handleTourClick} />
              </Flex>
            )}
          </>
        ) : (
          <div>jahoda</div>
        )}
      </Segment.Group>
      <Footer />
    </>
  );
};

export default OrdersPage;
