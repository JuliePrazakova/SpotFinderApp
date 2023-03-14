import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import messages from "../../Messages";
import React from "react";
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

const tours = Data.tours;

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
              {tours?.map((tours) => (
                <div key={tours.id}>
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
