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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    event.preventDefault();
    dispatch(setFilter(formData));
    navigate(paths.search.path);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
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
  );
};

const RoadTripBar = () => {
  const intl = useIntl();
  const navigate = useNavigate();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setFilter(formData));
    navigate(paths.search.path);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
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
  );
};

export default Searchbar;
