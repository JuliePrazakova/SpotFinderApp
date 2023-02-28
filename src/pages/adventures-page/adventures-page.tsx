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

const Instruction = () => {
  const intl = useIntl();

  return (
    <InstructionSection>
      <InstructionBox>
        <div>{intl.formatMessage(messages.instructionTitle)}</div>
        <Line>
          <div>
            <Number>1</Number>
            {intl.formatMessage(messages.instructionFirst)}
          </div>
          <div>
            <Number>2</Number>
            {intl.formatMessage(messages.instructionSecond)}
          </div>
        </Line>
        <Line>
          <div>
            <Number>3</Number>
            {intl.formatMessage(messages.instructionThird)}
          </div>
          <div>
            <Number>4</Number>
            {intl.formatMessage(messages.instructionFourth)}
          </div>
        </Line>
      </InstructionBox>
    </InstructionSection>
  );
};
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
          <Instruction />

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
