import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import messages from "../../Messages";
import React, { useState } from "react";
import Tour from "./tour/tour";
import Data from "../../data/tours.json";
import Companies from "../../data/companies.json";

// Styles
import { Wrapper } from "../landing-page/landing-section.styles";
import { Box } from "./adventures-page.styles";
import {
  Title,
  Address,
  ShortDescription,
  LongDescription,
  TopSection,
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
import { Icon } from "semantic-ui-react";
import AddToCartForm from "./add-to-cart-form";

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
  const [tour, setTour] = useState("");
  const [id, setId] = useState("");

  const handleData = (data: { name: string; id: string }) => {
    setTour(data.name);
    setId(data.id);
  };

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
                      <Tour tour={tours} btn={false} onData={handleData} />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </Grid>
            </LeftBox>
            {tour ? (
              <AddToCartForm name={tour} id={id} />
            ) : (
              <AddToCartForm name={""} id={""} />
            )}
          </MiddleSection>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Adventure;
