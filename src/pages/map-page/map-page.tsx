import React from "react";
import Header from "../../partials/header";
import Map from "./Map";
//import messages from "../../../Messages";
//import { useIntl } from "react-intl";
//import { Link } from "react-router-dom";

// Types

// Styles
import { MapSection } from "./map-page.styles";
//mport paths from "../../../utilities/pathnames";

const MapPage: React.FunctionComponent = () => {
  return (
    <div>
      <Header visible={true} />
      <MapSection>
        <Map />
      </MapSection>
    </div>
  );
};

export default MapPage;
