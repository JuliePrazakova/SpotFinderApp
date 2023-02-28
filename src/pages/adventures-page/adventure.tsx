import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { useIntl } from "react-intl";
import messages from "../../Messages";
import * as React from "react";
import Tour from "./tour/tour";
import Data from "../../data/tours.json";

// Styles
import { Wrapper } from "../landing-page/landing-section.styles";
import {
  MiddleSection,
  Grid,
  BackgroundCover,
  Title,
  TopBar,
  Box,
} from "./adventures-page.styles";
import { Search, Divider } from "semantic-ui-react";

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

const products = Data.tours;

const AdventuresPage: React.FunctionComponent = () => {
  const intl = useIntl();

  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <BackgroundCover>
            <Title>
              <p>
                {intl.formatMessage(messages.explore)} <br />{" "}
                {intl.formatMessage(messages.theWorld)} <br />{" "}
                {intl.formatMessage(messages.withSpotFinder)}{" "}
              </p>
              <div>{intl.formatMessage(messages.adventuresPageSubtitle)}</div>
            </Title>
          </BackgroundCover>

          <MiddleSection>
            <TopBar>
              <p>{intl.formatMessage(messages.ourTours)}</p>
              <Search placeholder="Search..." />
            </TopBar>

            <Grid>
              {products?.map((products) => (
                <div key={products.id}>
                  <Tour tour={products} />
                  <Divider section />
                </div>
              ))}
            </Grid>
          </MiddleSection>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default AdventuresPage;
