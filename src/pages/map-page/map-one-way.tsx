import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import mapboxgl, { FillLayer, Marker, NavigationControl } from "mapbox-gl";
import turf from "turf";
import circle from "@turf/circle";

import {
  CompanyTypeWithLoc,
  GetDataFromDB,
  SearchItemType,
} from "../../utilities/types";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";
import Company from "./company";

const OneWayMap: React.FC = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [data, setData] = useState<GetDataFromDB>();
  const [isCompany, setCompany] = useState<CompanyTypeWithLoc>();

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  const navigate = useNavigate();

  // getting coordinates from mapbox
  const [cityCoordinates, setCityCoordinates] = useState<[number, number]>();
  const accessToken =
    "pk.eyJ1IjoianVsaWVwcmF6YWtvdmEiLCJhIjoiY2xmcXZyZGlmMDJocDN1cGI0NTh2bjk2ZCJ9.-l8ij9IJ1HYsKRKa5qrsog";

  useEffect(() => {
    async function fetchCityCoordinates(
      city: string,
      setCoordinates: (coords: [number, number]) => void
    ) {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${accessToken}`;
      const response = await fetch(url);
      const data = await response.json();
      const coordinates: [number, number] = data.features[0].center;
      setCoordinates(coordinates);
    }

    fetchCityCoordinates(search.where, setCityCoordinates);
    if (!search.where && !search.from) {
      navigate(paths.home.path);
    }
  }, [search]);

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
        `http://localhost:5001/search/city?lat=${lat}&lng=${lng}&radius=${radius}`
      );

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (!data) return;

    mapboxgl.accessToken = accessToken;

    async function initializeMap() {
      const newMap = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: cityCoordinates,
        zoom: 8,
        preserveDrawingBuffer: true,
      });

      const nav = new NavigationControl();
      newMap.addControl(nav, "top-right");

      new Marker({ color: "#000000", scale: 1.2 })
        .setLngLat(cityCoordinates)
        .addTo(newMap);

      newMap.on("style.load", () => {
        // Add the circle layer
        if (cityCoordinates) {
          const point = turf.point(cityCoordinates);
          const data = circle(point, search.radius, 64, "kilometers");

          const layer: FillLayer = {
            id: "route-buffer",
            type: "fill",
            source: {
              type: "geojson",
              data: data,
            },
            paint: {
              "fill-color": "darkgray",
              "fill-opacity": 0.5,
            },
          };
          newMap.addLayer(layer);
        }

        data.companies.forEach((company) => {
          const marker = new Marker({
            color: "red",
            scale: 0.7,
          })
            .setLngLat([
              company.location.coordinates[1],
              company.location.coordinates[0],
            ])
            .addTo(newMap);

          marker.getElement().addEventListener("click", () => {
            setCompany(company);
          });
        });

        setMap(newMap);
      });
    }

    if (!map) {
      initializeMap();
    }
  }, [data, cityCoordinates, search.radius]);

  return (
    <>
      {isCompany && <Company company={isCompany} tours={data.tours} />}
      <div
        id="map"
        style={{ width: "100vw", height: "93vh", aspectRatio: "1 / 1" }}
      />
    </>
  );
};

export default OneWayMap;
