import React, { useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

import { SearchItemType } from "./search-bar";
import { useSelector } from "react-redux";

// Styles
import { Icon, Search } from "semantic-ui-react";
import {
  SearchBar,
  Line,
  Label,
  RoadTripBarSection,
  OneWayBarSection,
} from "./search-bar.styles";

type SearchItemProps = {
  filter?: SearchItemType;
};

const TopSearchBar: React.FunctionComponent = () => {
  const [oneWay] = useState(false);
  const [roadTrip] = useState(false);
  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  // Check if the `search` slice state exists
  if (!search) {
    return null; // or a loading indicator
  }

  const filter = {
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius,
  };
  console.log(search);

  return (
    <div>
      {filter.where || filter.from || filter.to || filter.radius ? (
        <Search placeholder="Search..." />
      ) : (
        <SearchBar>
          {oneWay && <OneWayBar filter={filter} />}
          {roadTrip && <RoadTripBar filter={filter} />}
          <div>
            <Icon name="search" />
          </div>
        </SearchBar>
      )}
    </div>
  );
};

const OneWayBar: React.FC<SearchItemProps> = ({ filter }) => {
  const intl = useIntl();

  return (
    <OneWayBarSection>
      <Label>
        {intl.formatMessage(messages.where)}:
        <input type="text" value={filter?.where} />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.radius)}:
        <input type="text" value={filter?.radius} />
      </Label>
    </OneWayBarSection>
  );
};

const RoadTripBar: React.FC<SearchItemProps> = ({ filter }) => {
  const intl = useIntl();

  return (
    <RoadTripBarSection>
      <Label>
        {intl.formatMessage(messages.from)}:
        <input type="text" value={filter?.from} />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.to)}:
        <input type="text" value={filter?.to} />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.radius)}:
        <input type="text" value={filter?.radius} />
      </Label>
    </RoadTripBarSection>
  );
};

export default TopSearchBar;
