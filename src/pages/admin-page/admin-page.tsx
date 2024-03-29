import React, { useState } from "react";
import Header from "../../partials/header";
import Footer from "../../partials/footer";
import Orders from "./components/a-orders";
import Order from "./components/a-order";
import { Menu, MenuItemProps } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";
import Tours from "./components/a-tours";
import Companies from "./components/a-companies";
import CompanyTourPage from "./components/a-company-tour-page";
import AddCompanyModal from "./components/add-company-modal";
import AddTourModal from "./components/add-tour-modal";
import Questions from "./components/a-qustions";

// Types
import { CompanyType, OrderItemWithId, TourItem } from "../../utilities/types";

// Styles
import { Button } from "../../App.styles";
import { BackgroundTitle, Block, Flex, MiddlePart } from "./admin-page.styles";
import { BackgroundCover } from "../adventures-page/adventures-page.styles";
import withProtectedRoute from "./protectedRoute";

const AdminPage = () => {
  const [activeItem, setActiveItem] = useState<string>("orders");
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<OrderItemWithId>();
  const [selectedTour, setSelectedTour] = useState<TourItem>();
  const [selectedCompany, setSelectedCompany] = useState<CompanyType>();
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isTourOpen, setTourOpen] = useState(false);

  const handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name as string);
    setSelectedOrder(undefined);
    setSelectedTour(undefined);
    setSelectedCompany(undefined);
    navigate(`${paths.admin.path}`);
  };

  const handleOrderClick = (order: OrderItemWithId) => {
    setSelectedOrder(order);
    navigate(`${paths["order-detail"].path.replace(":orderId", order._id)}`);
  };

  const handleTourClick = (tour: TourItem) => {
    setSelectedTour(tour);
    navigate(
      `${paths["company-detail"].path.replace(":companyId", tour.companyId)}`
    );
  };

  const handleCompanyClick = (company: CompanyType) => {
    setSelectedCompany(company);
    navigate(
      `${paths["company-detail"].path.replace(":companyId", company._id)}`
    );
  };

  const handleCompanyOpen = () => {
    setCompanyOpen(true);
  };

  const handleCloseCompany = () => {
    setCompanyOpen(false);
    navigate(paths.admin.path);
  };

  const handleTourOpen = () => {
    setTourOpen(true);
  };

  const handleCloseTour = () => {
    setTourOpen(false);
    navigate(paths.admin.path);
  };

  return (
    <>
      <Header visible={false} />
      <BackgroundCover>
        <BackgroundTitle>Admin page</BackgroundTitle>
      </BackgroundCover>

      <MiddlePart>
        <Menu pointing secondary vertical>
          <Menu.Item
            name="orders"
            active={activeItem === "orders"}
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
          <Menu.Item
            name="qustions"
            active={activeItem === "questions"}
            onClick={handleItemClick}
          />
        </Menu>

        {activeItem === "orders" ? (
          <>
            {selectedOrder ? (
              <Order order={selectedOrder} />
            ) : (
              <Block>
                <Flex>
                  <Orders onOrderClick={handleOrderClick} />
                </Flex>
              </Block>
            )}
          </>
        ) : activeItem === "tours" ? (
          <>
            {selectedTour ? (
              <CompanyTourPage />
            ) : (
              <Block>
                <Button onClick={handleTourOpen}>Add new tour</Button>
                <AddTourModal
                  title="Add new tour"
                  isOpen={isTourOpen}
                  onClose={handleCloseTour}
                />
                <Flex>
                  <Tours onTourClick={handleTourClick} />
                </Flex>
              </Block>
            )}
          </>
        ) : activeItem === "companies" ? (
          <>
            {selectedCompany ? (
              <CompanyTourPage />
            ) : (
              <Block>
                <Button onClick={handleCompanyOpen}>Add new company</Button>
                <AddCompanyModal
                  title="Add new company"
                  isOpen={isCompanyOpen}
                  onClose={handleCloseCompany}
                />
                <Flex>
                  <Companies onCompanyClick={handleCompanyClick} />
                </Flex>
              </Block>
            )}
          </>
        ) : activeItem === "qustions" ? (
          <Block>
            <Flex>
              <Questions />
            </Flex>
          </Block>
        ) : (
          <div>Not found</div>
        )}
      </MiddlePart>
      <Footer />
    </>
  );
};

export default withProtectedRoute(AdminPage);
