import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import messages from "../../Messages";
import * as React from "react";
import Tour from "./tour/tour";
import Data from "../../data/tours.json";
import Companies from "../../data/companies.json";

// Styles
import { Wrapper } from "../landing-page/landing-section.styles";
import { Box } from "./adventures-page.styles";
import { Button } from "../../App.styles";
import {
  Title,
  Address,
  ShortDescription,
  LongDescription,
  TopSection,
  OrderForm,
  MiddleSection,
  Subtitle,
  LeftBox,
  Grid,
  TopBar,
  LeftSide,
  RightSide,
  MainImg,
  SideImgs,
} from "./adventure.styles";
import { Form, Icon } from "semantic-ui-react";

export type TourItem = {
  id: string;
  company: string;
  companyId: string;
  name: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  descShort: string;
  descLong: string;
  ticketPrice: number;
  image: string;
  duration: string;
};

const tours = Data.tours;
const companies = Companies.companies;

export type RouteParams = {
  companyId: string;
};

const Adventure: React.FunctionComponent = () => {
  const intl = useIntl();
  const { companyId } = useParams<RouteParams>();
  const company = companies.find((com) => com.id === companyId);

  return (
    <>
      <Header visible={true} />
      <Wrapper>
        <Box>
          <TopBar></TopBar>
          <TopSection>
            <LeftSide>
              <Title>{company?.name}</Title>
              <Address>
                <Icon name="marker" />
                {company?.street}, {company?.zip} {company?.city}
              </Address>
              <ShortDescription>{company?.descShort}</ShortDescription>
              <LongDescription>{company?.descLong}</LongDescription>
            </LeftSide>
            <RightSide>
              <MainImg>
                <img src={company?.image1} alt={company?.name} />
              </MainImg>
              <SideImgs>
                <img src={company?.image2} alt={company?.name} />
                <img src={company?.image3} alt={company?.name} />
              </SideImgs>
            </RightSide>
          </TopSection>

          <MiddleSection>
            <LeftBox>
              <Subtitle> {intl.formatMessage(messages.ourTours)}</Subtitle>
              <Grid>
                {tours?.map((tours) => (
                  <div key={tours.id}>
                    {tours.companyId === company?.id ? (
                      <Tour tour={tours} btn={false} />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </Grid>
            </LeftBox>
            <OrderForm>
              <Form>
                <Form.Group>
                  <Form.Input
                    label="Tour"
                    placeholder="Long ride"
                    id="form-input-first-name"
                  />
                  <Form.Input label="People" placeholder="1" />
                </Form.Group>
                <Form.Group>
                  <Form.Input label="Date" placeholder="03. 03. 2023" />
                  <Form.Input label="Time" placeholder="1" />
                </Form.Group>

                <Form.Field></Form.Field>
                <Button>Add to cart</Button>
              </Form>
            </OrderForm>
          </MiddleSection>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Adventure;
