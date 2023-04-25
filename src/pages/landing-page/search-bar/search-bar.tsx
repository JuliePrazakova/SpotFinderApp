import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import messages from "../../../Messages";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import paths from "../../../utilities/pathnames";
import { setFilter } from "../../../redux/actions/search-actions";

// Styles
import {
  Buttons,
  SearchButton,
  Line,
  TypeButton,
  Label,
  RoadTripBarSection,
  OneWayBarSection,
  SearchBar,
} from "./search-bar.styles";
import { SearchItemType } from "../../../utilities/types";
import { Message } from "semantic-ui-react";

const Searchbar: React.FunctionComponent = () => {
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
      </SearchBar>
    </div>
  );
};

const OneWayBar = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(true);

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  const [formData, setFormData] = useState({
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius || undefined,
  });

  const dispatch = useDispatch();
  const accessToken =
    "pk.eyJ1IjoianVsaWVwcmF6YWtvdmEiLCJhIjoiY2xmcXZyZGlmMDJocDN1cGI0NTh2bjk2ZCJ9.-l8ij9IJ1HYsKRKa5qrsog";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${formData.where}.json?access_token=${accessToken}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.features.length);
    if (data.features.length != 0 && formData.radius > 0) {
      dispatch(setFilter(formData));
      navigate(paths.search.path);
    } else {
      setShowError(true);
      console.log("invalid city");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <OneWayBarSection onSubmit={handleSubmit}>
        <Label>
          {intl.formatMessage(messages.where)}:
          <input
            type="text"
            name="where"
            value={formData.where}
            onChange={handleChange}
          />
        </Label>

        <Line></Line>

        <Label>
          {intl.formatMessage(messages.radius)}:
          <input
            type="text"
            name="radius"
            value={formData.radius}
            onChange={handleChange}
          />
        </Label>

        <SearchButton>
          <div>
            <button type="submit">{intl.formatMessage(messages.search)}</button>
          </div>
        </SearchButton>
      </OneWayBarSection>
      {showError && (
        <Message
          error
          content="Please fill real cities and radius."
          floating
          style={{ position: "absolute", top: 590, left: "20%", zIndex: 9999 }}
        />
      )}
    </>
  );
};

const RoadTripBar = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  const [formData, setFormData] = useState({
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius,
  });

  const dispatch = useDispatch();
  const accessToken =
    "pk.eyJ1IjoianVsaWVwcmF6YWtvdmEiLCJhIjoiY2xmcXZyZGlmMDJocDN1cGI0NTh2bjk2ZCJ9.-l8ij9IJ1HYsKRKa5qrsog";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${formData.from}.json?access_token=${accessToken}`;
    const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${formData.to}.json?access_token=${accessToken}`;

    const response = await fetch(url);
    const response2 = await fetch(url2);

    const data = await response.json();
    const data2 = await response2.json();

    console.log(data.features.length);
    if (
      data.features.length != 0 &&
      data2.features.length != 0 &&
      formData.radius > 0
    ) {
      dispatch(setFilter(formData));
      navigate(paths.search.path);
    } else {
      setShowError(true);
      console.log("invalid city");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <RoadTripBarSection onSubmit={handleSubmit}>
        <Label>
          {intl.formatMessage(messages.from)}:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
          />
        </Label>

        <Line></Line>

        <Label>
          {intl.formatMessage(messages.to)}:
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />
        </Label>

        <Line></Line>

        <Label>
          {intl.formatMessage(messages.radius)}:
          <input
            type="text"
            name="radius"
            value={formData.radius}
            onChange={handleChange}
          />
        </Label>

        <SearchButton>
          <div>
            <button type="submit">{intl.formatMessage(messages.search)}</button>
          </div>
        </SearchButton>
      </RoadTripBarSection>
      {showError && (
        <Message
          error
          content="Please fill real cities and radius."
          floating
          style={{ position: "absolute", top: 590, left: "20%", zIndex: 9999 }}
        />
      )}
    </>
  );
};

export default Searchbar;
