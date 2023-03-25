import React, { useEffect, useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import { Button } from "../../../App.styles";
import { Container, Divider, Grid, List, Segment } from "semantic-ui-react";
import { TourItem, TourListProps } from "../../../utilities/types";
import axios from "axios";
import { Title } from "../admin-page.styles";

const TourComponent: React.FunctionComponent<TourListProps> = ({
  tour,
  onTourClick,
}) => {
  const intl = useIntl();

  return (
    <Segment>
      <Container>
        <Title>
          <p>{tour?.name}</p>
          <Button onClick={() => tour && onTourClick(tour)}>
            View company
          </Button>
        </Title>
        <b>{tour?.company}</b>
        <br />
      </Container>
      <Divider />
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.country)}:</b> {tour?.country}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.city)}:</b> {tour?.city}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.street)}:</b>
                  {tour?.street}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.zip)}:</b> {tour?.zip}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <b> {intl.formatMessage(messages.descShort)}:</b>{" "}
                  {tour?.descShort}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b> {intl.formatMessage(messages.descLong)}:</b>{" "}
                  {tour?.descLong}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b> {intl.formatMessage(messages.duration)}:</b>{" "}
                  {tour?.duration}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Content>
                  <b>{tour?.descShort}</b>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b>{intl.formatMessage(messages.ticketPrice)}: </b>
                  {tour?.ticketPrice}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <b> {intl.formatMessage(messages.duration)}:</b>{" "}
                  {tour?.duration}
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

const Tours: React.FunctionComponent<TourListProps> = ({ onTourClick }) => {
  const [tours, setTours] = useState<TourItem[]>([]);

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
      {tours?.map((tour) => (
        <div key={tour._id}>
          <TourComponent tour={tour} key={tour._id} onTourClick={onTourClick} />
        </div>
      ))}
    </>
  );
};

export default Tours;
