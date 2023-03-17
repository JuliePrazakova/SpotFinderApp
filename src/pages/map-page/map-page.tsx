import React from "react";
import Header from "../../partials/header";
import Company from "./company";
import Map from "./map";

// Styles
import { Section } from "./map-page.styles";

export type MapSearchType = {
  id: string;
};

const MapPage: React.FunctionComponent = () => {
  return (
    <div>
      <Header visible={true} />
      <Section>
        <Company />
        <Map />
      </Section>
    </div>
  );
};

export default MapPage;
