import Header from "../../partials/header";
import Footer from "../../partials/footer";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import messages from "../../Messages";
import React, { useEffect, useState } from "react";
import Tour from "./tour/tour";
import AddToCartForm from "./add-to-cart-form";
import axios from "axios";

// Styles
import { Wrapper } from "../landing-page/landing-section.styles";
import { Box } from "./adventures-page.styles";
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
} from "./adventure.styles";
import { Icon } from "semantic-ui-react";
import { CompanyType, RouteParams, TourItem } from "../../utilities/types";

const Adventure: React.FunctionComponent = () => {
  const intl = useIntl();
  const { companyId } = useParams<RouteParams>();

  const [tour, setTour] = useState<TourItem>();

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
            })
          );

          setTours(tourItems);

          const company = response.data.company;

          setCompany({
            id: company._id,
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

  return (
    <>
      <Header visible={true} />
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

              <Grid>
                {tours?.map((tours) => (
                  <div key={tours.id}>
                    <Tour
                      tour={tours}
                      btn={false}
                      onData={handleData}
                      key={tours.id}
                    />
                  </div>
                ))}
              </Grid>
            </LeftBox>

            {tour ? (
              <AddToCartForm tour={tour} />
            ) : (
              <AddToCartForm tour={undefined} />
            )}
          </MiddleSection>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Adventure;
