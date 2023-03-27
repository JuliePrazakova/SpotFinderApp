import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../partials/header";
import Company from "./company";
import Map from "./map";
import paths from "../../utilities/pathnames";

// Styles
import { Section } from "./map-page.styles";

// Types
import { SearchData, SearchItemType } from "../../utilities/types";

const MapPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  // getting coordinates from leaflet
  const [cityCoordinates, setCityCoordinates] = useState<
    [number, number] | undefined
  >();

  const [cityA, setCityA] = useState<[number, number] | undefined>();
  const [cityB, setCityB] = useState<[number, number] | undefined>();
  const [data, setData] = useState<SearchData | null>(null);

  useEffect(() => {
    async function fetchCityCoordinates(
      city: string,
      setCoordinates: (coords: [number, number]) => void
    ) {
      const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
      const response = await fetch(url);
      const data = await response.json();
      const coordinates: [number, number] = [data[0]?.lat, data[0]?.lon];
      setCoordinates(coordinates);
    }

    if (search.where) {
      fetchCityCoordinates(search.where, setCityCoordinates);
    } else if (search.from && search.to) {
      fetchCityCoordinates(search.from, setCityA);
      fetchCityCoordinates(search.to, setCityB);
    } else {
      navigate(paths.home.path);
    }
  }, [search.where, search.from, search.to]);

  // getting companies from database
  // must be here because companies needed in both Company & Map component
  useEffect(() => {
    if (cityCoordinates && search.radius) {
      fetchCompaniesAndTours(cityCoordinates, search.radius);
    }
  }, [cityCoordinates, search.radius]);

  async function fetchCompaniesAndTours(
    cityCoordinates: [number, number],
    radius: number
  ) {
    try {
      const [lng, lat] = cityCoordinates;

      const response = await fetch(
        `http://localhost:5001/search?lat=${lat}&lng=${lng}&radius=${radius}`
      );

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <Header visible={true} />
      <Section>
        <Company companies={data?.companies} tours={data?.tours} />
        {search.radius && (
          <Map
            cityCoordinates={cityCoordinates}
            cityA={cityA}
            cityB={cityB}
            radius={search.radius}
            companies={data?.companies}
          />
        )}
      </Section>
    </div>
  );
};

export default MapPage;
