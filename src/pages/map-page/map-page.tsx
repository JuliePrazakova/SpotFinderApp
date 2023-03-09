import React from "react";
import Header from "../../partials/header";
import Map from "./Map";
//import Company from "./company";
//import messages from "../../../Messages";
//import { useIntl } from "react-intl";
//import { Link } from "react-router-dom";    {mapSearch && <Company mapSearch={mapSearch} />}
//   const mapSearch = useSelector((state: { map: MapSearchType }) => state.map);

// Types

// Styles
//import { useSelector } from "react-redux";

export type MapSearchType = {
  id: string;
};

const MapPage: React.FunctionComponent = () => {
  return (
    <div>
      <Header visible={true} />
      <Map />
    </div>
  );
};

export default MapPage;
