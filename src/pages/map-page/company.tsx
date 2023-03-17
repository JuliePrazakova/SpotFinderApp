import { useIntl } from "react-intl";
import messages from "../../Messages";
import React from "react";
import MiniTour from "../adventures-page/tour/tour-small";
import Data from "../../data/tours.json";
import Companies from "../../data/companies.json";
import paths from "../../utilities/pathnames";
import { Link } from "react-router-dom";

// Styles
import { Wrapper } from "./map-page.styles";
import {
  Title,
  Address,
  ShortDescription,
  TopSection,
  Subtitle,
  Grid,
  LowerSection,
  MainImg,
  ButtonSection,
} from "./map-page.styles";
import { Icon } from "semantic-ui-react";
import { Button } from "../../App.styles";

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

const Company: React.FunctionComponent = () => {
  const intl = useIntl();
  // fetching data from DB
  // const mapSearch = useSelector((state: { map: MapSearchType }) => state.map);

  const company = companies.find((com) => com.id === "1");

  return (
    <>
      {company && (
        <Wrapper>
          <MainImg>
            <img src={company?.image1} alt={company?.name} />
          </MainImg>

          <TopSection>
            <Title>{company?.name}</Title>
            <Address>
              <Icon name="marker" />
              {company?.street}, {company?.zip} {company?.city}
            </Address>
            <ShortDescription>{company?.descShort}</ShortDescription>
          </TopSection>

          <LowerSection>
            <Subtitle> {intl.formatMessage(messages.ourTours)}</Subtitle>
            <Grid>
              {tours?.map((tours) => (
                <div key={tours.id}>
                  {tours.companyId === company.id ? (
                    <MiniTour tour={tours} />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </Grid>
          </LowerSection>

          <ButtonSection>
            <Button>
              <Link
                to={paths["adventure-detail"].path.replace(
                  ":companyId",
                  company.id
                )}
              >
                {intl.formatMessage(messages.learnMore)}
              </Link>
            </Button>
          </ButtonSection>
        </Wrapper>
      )}
    </>
  );
};

export default Company;
