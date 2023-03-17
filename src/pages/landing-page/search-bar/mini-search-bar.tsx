import React from "react";
import { SearchItemType } from "./search-bar";
import { useSelector } from "react-redux";

// Styles
import { Icon, Search } from "semantic-ui-react";
import {
  SearchBarMini,
  LineMini,
  RoadTripBarSectionMini,
  OneWayBarSectionMini,
  SearchIcon,
} from "./search-bar.styles";

type SearchItemProps = {
  filter?: SearchItemType;
};

const TopSearchBar: React.FunctionComponent = () => {
  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  const filter = {
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius,
  };

  return (
    <div>
      {filter.where ? (
        <SearchBarMini>
          <OneWayBar filter={filter} />
          <SearchIcon>
            <Icon name="search" />
          </SearchIcon>
        </SearchBarMini>
      ) : filter.from && filter.to ? (
        <SearchBarMini>
          <RoadTripBar filter={filter} />
          <SearchIcon>
            <Icon name="search" />
          </SearchIcon>
        </SearchBarMini>
      ) : (
        <Search placeholder="Search..." />
      )}
    </div>
  );
};

const OneWayBar: React.FC<SearchItemProps> = ({ filter }) => {
  return (
    <OneWayBarSectionMini>
      <div>{filter?.where}</div>

      <LineMini></LineMini>

      <div>{filter?.radius}</div>
    </OneWayBarSectionMini>
  );
};

const RoadTripBar: React.FC<SearchItemProps> = ({ filter }) => {
  return (
    <RoadTripBarSectionMini>
      <div>{filter?.from}</div>

      <LineMini></LineMini>

      <div>{filter?.to}</div>

      <LineMini></LineMini>

      <div>{filter?.radius}</div>
    </RoadTripBarSectionMini>
  );
};

export default TopSearchBar;
