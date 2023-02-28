import React, { useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";

// Styles
import {
  SearchBar,
  Buttons,
  SearchButton,
  Line,
  TypeButton,
  Label,
  RoadTripBarSection,
  OneWayBarSection,
} from "./search-bar.styles";

const Search: React.FunctionComponent = () => {
  const intl = useIntl();

  const [oneWay, setOneWay] = useState(true);
  const [roadTrip, setRoadTrip] = useState(false);
  const [toggleClass, setToggleClass] = useState(true);

  function changeOneWay() {
    setOneWay(true);
    setRoadTrip(false);
    setToggleClass(true);
  }
  function changeRoadTrip() {
    setOneWay(false);
    setRoadTrip(true);
    setToggleClass(false);
  }

  return (
    <div>
      <Buttons>
        <TypeButton className={toggleClass ? "active" : ""}>
          <button onClick={changeOneWay}>
            {intl.formatMessage(messages.onePlace)}
          </button>
        </TypeButton>
        <TypeButton className={toggleClass ? "" : "active"}>
          <button onClick={changeRoadTrip}>
            {intl.formatMessage(messages.roadTrip)}
          </button>
        </TypeButton>
      </Buttons>
      <SearchBar>
        {oneWay && <OneWayBar />}
        {roadTrip && <RoadTripBar />}
        <SearchButton>
          <div>{intl.formatMessage(messages.search)}</div>
        </SearchButton>
      </SearchBar>
    </div>
  );
};
const OneWayBar = () => {
  const intl = useIntl();

  return (
    <OneWayBarSection>
      <Label>
        {intl.formatMessage(messages.where)}:
        <input type="text" />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.radius)}:
        <input type="text" />
      </Label>
    </OneWayBarSection>
  );
};

const RoadTripBar = () => {
  const intl = useIntl();

  return (
    <RoadTripBarSection>
      <Label>
        {intl.formatMessage(messages.from)}:
        <input type="text" />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.to)}:
        <input type="text" />
      </Label>
      <Line></Line>
      <Label>
        {intl.formatMessage(messages.radius)}:
        <input type="text" />
      </Label>
    </RoadTripBarSection>
  );
};

export default Search;
