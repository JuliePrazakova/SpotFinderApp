import { useIntl } from "react-intl";
import messages from "../../Messages";
import React from "react";
import MiniTour from "../adventures-page/tour/tour-small";
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
import { AdventurePageType } from "../../utilities/types";

const Company: React.FunctionComponent<AdventurePageType> = ({
  company,
  tours,
}) => {
  const intl = useIntl();

  const companyTours = tours?.filter((tour) => tour.companyId === company._id);

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
              {companyTours?.map((tours) => (
                <div key={tours._id}>
                  {tours.companyId === company._id ? (
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
                  company._id
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
