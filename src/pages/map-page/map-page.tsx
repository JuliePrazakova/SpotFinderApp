import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../partials/header";
import { SearchItemType } from "../../utilities/types";
import OneWayMap from "./map-one-way";
import paths from "../../utilities/pathnames";
import RoadTripMap from "./map-road-trip";

const MapPage: React.FC = () => {
  const navigate = useNavigate();

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (search.from === "" && search.where === "") {
    navigate(paths.home.path);
  }

  return (
    <>
      <Header visible={true} />
      <>
        {search.where ? (
          <OneWayMap />
        ) : search.from ? (
          <RoadTripMap />
        ) : (
          navigate(paths.home.path)
        )}
      </>
    </>
  );
};

export default MapPage;
