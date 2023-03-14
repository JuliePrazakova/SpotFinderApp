import React from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Types
// Styles
import { TextBox } from "../adventures-page.styles";
import { MiniTour, TourTitle } from "../../map-page/map-page.styles";
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

export type SmallTourProps = {
  tour: TourItem;
};

const CategoryList: React.FunctionComponent<SmallTourProps> = ({ tour }) => {
  const intl = useIntl();

  return (
    <MiniTour>
      <TextBox>
        <TourTitle>
          <p>{tour.name}</p> {tour.ticketPrice}$
        </TourTitle>

        <List>
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
      </TextBox>
    </MiniTour>
  );
};

export default CategoryList;
