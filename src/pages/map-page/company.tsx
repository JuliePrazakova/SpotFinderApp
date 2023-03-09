import { useIntl } from "react-intl";
import messages from "../../Messages";
import * as React from "react";
import Tour from "../adventures-page/tour/tour";
import Data from "../../data/tours.json";
import Companies from "../../data/companies.json";

// Styles
import { Wrapper } from "../landing-page/landing-section.styles";
import { Box } from "../adventures-page/adventures-page.styles";
//import { Button } from "../../App.styles";
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
  LeftSide,
  MainImg,
} from "../adventures-page/adventure.styles";
import { Icon } from "semantic-ui-react";
import { MapSearchType } from "./map-page";

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

export type MapSearchProps = {
  mapSearch: MapSearchType;
};

const Company: React.FunctionComponent<MapSearchProps> = ({ mapSearch }) => {
  const intl = useIntl();
  const company = companies.find((com) => com.id === mapSearch.id);

  return (
    <>
      <Wrapper>
        <Box>
          <TopSection>
            <LeftSide>
              <MainImg>
                <img src={company?.image1} alt={company?.name} />
              </MainImg>
              <Title>{company?.name}</Title>
              <Address>
                <Icon name="marker" />
                {company?.street}, {company?.zip} {company?.city}
              </Address>
              <ShortDescription>{company?.descShort}</ShortDescription>
              <LongDescription>{company?.descLong}</LongDescription>
            </LeftSide>
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
          </MiddleSection>
        </Box>
      </Wrapper>
    </>
  );
};

export default Company;
