// Types
// Styles
import { Wrapper, Buttons } from "./Search.styles";
import React, { useState } from "react";

export type ISearchProps = Record<string, unknown>;

const Search: React.FunctionComponent<ISearchProps> = () => {
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
        <div className={toggleClass ? "type-button active" : "type-button"}>
          <button onClick={changeOneWay}>One place</button>
        </div>
        <div className={toggleClass ? "type-button" : "type-button active"}>
          <button onClick={changeRoadTrip}>Road trip</button>
        </div>
      </Buttons>
      <Wrapper>
        {oneWay && <OneWayBar />}
        {roadTrip && <RoadTripBar />}
        <div className="search-button">
          <div>Search</div>
        </div>
      </Wrapper>
    </div>
  );
};
const OneWayBar = () => (
  <>
    <div className="label left">
      Where:
      <input type="text" className="search-left" />
    </div>
    <div className="vl"></div>

    <div className="label">
      Radius:
      <input type="text" className="search-left" />
    </div>
  </>
);

const RoadTripBar = () => (
  <>
    <div className="label left">
      From:
      <input type="text" className="search-left" />
    </div>
    <div className="vl"></div>

    <div className="label">
      To:
      <input type="text" className="search-left" />
    </div>
    <div className="vl"></div>
    <div className="label">
      Radius:
      <input type="text" className="search-left" />
    </div>
  </>
);

export default Search;
