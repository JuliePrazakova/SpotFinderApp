//components
import Header from "../partials/Header";
import Footer from "../partials/Footer";
// Types
// Styles
import { Wrapper } from "../LandingPage/LandingSection.styles";

import {
  InstructionSection,
  MiddleSection,
  Grid,
  BackgroundCover,
  Title,
  TopBar,
  Box,
  Number,
  Line,
  InstructionBox,
} from "./AdventuresPage.styles";
import * as React from "react";
import Tour from "./Tour/Tour";
import Data from "../Data/products.json";
import { Search, Divider } from "semantic-ui-react";

export type ITestPageProps = Record<string, unknown>;

export type TourItem = {
  id: number;
  company: string;
  name: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  desc_short: string;
  desc_long: string;
  ticket_price: number;
  image: string;
  duration: string;
};

const products = Data.products;

const Instruction = () => (
  <InstructionSection>
    <InstructionBox>
      <div>How to reserve a tour?</div>
      <Line>
        <div>
          <Number>1</Number>
          Choose a tour you want
        </div>
        <div>
          <Number>2</Number>
          Pick a date and time of your tour
        </div>
      </Line>
      <Line>
        <div>
          <Number>3</Number>
          Set amount of people
        </div>
        <div>
          <Number>4</Number>
          Click order
        </div>
      </Line>
    </InstructionBox>
  </InstructionSection>
);
const AdventuresPage: React.FunctionComponent<ITestPageProps> = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <BackgroundCover>
            <Title>
              <p>
                Explore
                <br />
                the world <br />
                with SpotFinder
              </p>
              <div>Choose the best activities for your trip</div>
            </Title>
          </BackgroundCover>
          <Instruction />

          <MiddleSection>
            <TopBar>
              <p>Our Tours</p>
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
