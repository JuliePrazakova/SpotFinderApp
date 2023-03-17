import React from "react";
import { Link } from "react-router-dom";
import messages from "../../../Messages";
import { useIntl } from "react-intl";
import paths from "../../../utilities/pathnames";

// Styles
import { Tour, TourBox, TextBox } from "../adventures-page.styles";
import { Button } from "../../../App.styles";
import { List } from "semantic-ui-react";

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

export type TourProps = {
  tour: TourItem;
  btn: boolean;
  onData?: (data: { name: string; id: string }) => void;
};

const CategoryList: React.FunctionComponent<TourProps> = ({
  tour,
  btn,
  onData,
}) => {
  const intl = useIntl();
  const price = tour.ticketPrice;

  const sendDataToParent = () => {
    const data = {
      name: tour.name,
      id: tour.id,
    };
    if (onData) {
      onData(data);
    }
  };

  return (
    <Tour>
      <TourBox>
        <img src={tour.image} alt={tour.name} />

        <TextBox>
          <h3>{tour.company}</h3>
          <p>{tour.name}</p>

          <List>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                {tour.city}, {tour.country}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="clock outline" />
              <List.Content>
                {intl.formatMessage(messages.duration)}: {tour.duration}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="check" />
              <List.Content>{tour.descShort}</List.Content>
            </List.Item>
          </List>

          <p>{intl.formatMessage(messages.pricePerPerson, { price })}</p>
        </TextBox>
      </TourBox>
      {btn ? (
        <Button>
          <Link
            to={paths["adventure-detail"].path.replace(
              ":companyId",
              tour.companyId
            )}
          >
            {intl.formatMessage(messages.learnMore)}
          </Link>
        </Button>
      ) : (
        <Button onClick={sendDataToParent}>
          {intl.formatMessage(messages.select)}
        </Button>
      )}{" "}
    </Tour>
  );
};

export default CategoryList;
