import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import messages from "../../Messages";
import React, { useState, useEffect } from "react";
import TourComponent from "./tour/tour";

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
  Search,
} from "./adventures-page.styles";
import { Divider, Icon } from "semantic-ui-react";
import axios from "axios";
import { TourItem } from "../../utilities/types";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [tours, setTours] = useState<TourItem[]>([]);
  const [filteredTours, setFilteredTours] = useState<TourItem[]>([]);
  console.log(tours);

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    if (searchTerm && tours) {
      const filteredTours = tours.filter((tour) =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTours(filteredTours);
    }
  }, [searchTerm, tours]);

  useEffect(() => {
    const API_URL = "http://localhost:5001/adventures";

    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const tourItems: TourItem[] = response.data.map((item: TourItem) => ({
            _id: item._id.toString(),
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

              <Search>
                <div>
                  <input
                    placeholder="Search..."
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div>
                  <Icon name="search" />
                </div>
              </Search>
            </TopBar>

            <Grid>
              {searchTerm
                ? filteredTours?.map((tour) => (
                    <div key={tour._id}>
                      <TourComponent tour={tour} btn={true} key={tour._id} />
                      <Divider section />
                    </div>
                  ))
                : tours?.map((tour) => (
                    <div key={tour._id}>
                      <TourComponent tour={tour} btn={true} key={tour._id} />
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
