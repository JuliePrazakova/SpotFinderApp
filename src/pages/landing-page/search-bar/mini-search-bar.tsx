import React from "react";

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
  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  // Check if the `search` slice state exists
  if (!search) {
    return null;
  }

  const filter = {
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius,
  };
  console.log("tohle je vysledek search: ", search);

  return (
    <div>
      {filter.where ? (
        <SearchBar>
          <OneWayBar filter={filter} />
          <div>
            <Icon name="search" />
          </div>
        </SearchBar>
      ) : filter.from && filter.to ? (
        <SearchBar>
          <RoadTripBar filter={filter} />
          <div>
            <Icon name="search" />
          </div>
        </SearchBar>
      ) : (
        <Search placeholder="Search..." />
      )}
    </div>
  );
};

const OneWayBar: React.FC<SearchItemProps> = ({ filter }) => {
  return (
    <OneWayBarSection>
      <Label>
        <div>{filter?.where}</div>
      </Label>
      <Line></Line>
      <Label>
        <div>{filter?.radius}</div>
      </Label>
    </OneWayBarSection>
  );
};

const RoadTripBar: React.FC<SearchItemProps> = ({ filter }) => {
  return (
    <RoadTripBarSection>
      <Label>
        <div>{filter?.from}</div>
      </Label>
      <Line></Line>
      <Label>
        <div>{filter?.to}</div>
      </Label>
      <Line></Line>
      <Label>
        <div>{filter?.radius}</div>
      </Label>
    </RoadTripBarSection>
  );
};

export default TopSearchBar;
