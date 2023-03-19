import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import messages from "../../Messages";
import React, { useState, useEffect } from "react";
import TourComponent from "./tour/tour";
import { TourItem } from "./tour/tour";

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
import axios from "axios";

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

  const [tours, setTours] = useState<TourItem[]>([]);

  useEffect(() => {
    const API_URL = "http://localhost:5001/adventures";

    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const tourItems: TourItem[] = response.data.map((item: TourItem) => ({
            id: item.id,
            company: item.company,
            companyId: item.companyId,
            name: item.name,
            country: item.country,
            city: item.city,
            street: item.street,
            zip: item.zip,
            descShort: item.descShort,
            descLong: item.descLong,
            ticketPrice: item.ticketPrice,
            image: item.image,
            duration: item.duration,
          }));

          setTours(tourItems);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header visible={true} />
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
              {tours?.map((tour) => (
                <div key={tour.id}>
                  <TourComponent tour={tour} btn={true} key={tour.id} />
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
