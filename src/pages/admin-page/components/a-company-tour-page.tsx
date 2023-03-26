import { useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import messages from "../../../Messages";
import React, { useEffect, useState } from "react";
import axios from "axios";
import paths from "../../../utilities/pathnames";

// Styles
import { Box } from "../../adventures-page/adventures-page.styles";
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
  RightSide,
  MainImg,
  SideImgs,
} from "../../adventures-page/adventure.styles";
import { Icon } from "semantic-ui-react";
import { CompanyType, RouteParams, TourItem } from "../../../utilities/types";
import { Wrapper } from "../../landing-page/landing-section.styles";
import Tour from "../../adventures-page/tour/tour";
import AddTourModal from "./add-tour-modal";
import { Button } from "../../../App.styles";

const CompanyTourPage: React.FunctionComponent = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { companyId } = useParams<RouteParams>();
  const [isTourOpen, setTourOpen] = useState(false);

  const [tour, setTour] = useState<TourItem>();
  console.log(tour);
  const [tours, setTours] = useState<TourItem[]>([]);
  const [company, setCompany] = useState<CompanyType>();

  useEffect(() => {
    const API_URL = "http://localhost:5001/adventures/";

    axios
      .get(API_URL + `${companyId}`)
      .then((response) => {
        if (Array.isArray(response.data.tours)) {
          const tourItems: TourItem[] = response.data.tours.map(
            (item: TourItem) => ({
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
            })
          );

          setTours(tourItems);

          const company = response.data.company;

          setCompany({
            _id: company._id,
            name: company.name,
            country: company.country,
            city: company.city,
            street: company.street,
            zip: company.zip,
            descShort: company.descShort,
            descLong: company.descLong,
            image1: company.image1,
            image2: company.image2,
            image3: company.image3,
            email: company.email,
            phone: company.phone,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleData = (data: { tour: TourItem }) => {
    setTour(data.tour);
  };

  const handleTourOpen = () => {
    setTourOpen(true);
  };

  const handleCloseTour = () => {
    setTourOpen(false);
    navigate(paths.admin.path);
  };

  return (
    <>
      <Wrapper>
        <Box>
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
              <Button onClick={handleTourOpen}>Add new tour</Button>
              <AddTourModal
                title="Add new tour"
                isOpen={isTourOpen}
                onClose={handleCloseTour}
              />
              <Grid>
                {tours?.map((tours) => (
                  <div key={tours._id}>
                    <Tour
                      tour={tours}
                      btn={false}
                      onData={handleData}
                      key={tours._id}
                    />
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

export default CompanyTourPage;
