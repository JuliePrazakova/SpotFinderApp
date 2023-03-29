import React, { useState, useEffect } from "react";
import mapboxgl, { NavigationControl, Marker } from "mapbox-gl";
import { useSelector } from "react-redux";
import { SearchData, SearchItemType } from "../../utilities/types";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";
import turf from "turf";

const RoadTripMap: React.FC = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [cityA, setCityA] = useState<[number, number] | undefined>();
  const [cityB, setCityB] = useState<[number, number] | undefined>();
  const [companies] = useState<SearchData>();

  const navigate = useNavigate();

  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  // getting coordinates from mapbox
  const accessToken =
    "pk.eyJ1IjoianVsaWVwcmF6YWtvdmEiLCJhIjoiY2xmcXZyZGlmMDJocDN1cGI0NTh2bjk2ZCJ9.-l8ij9IJ1HYsKRKa5qrsog";

  const addBufferToRoute = (
    map: mapboxgl.Map,
    routeCoordinates: [number, number][],
    radius: number
  ) => {
    const line = turf.lineString(routeCoordinates);
    const buffer = turf.buffer(
      {
        type: "FeatureCollection",
        features: [line],
      },
      radius,
      "miles"
    );

    map.addLayer({
      id: "route-buffer",
      type: "fill",
      source: {
        type: "geojson",
        data: buffer,
      },
      paint: {
        "fill-color": "darkgray",
        "fill-opacity": 0.5,
      },
    });
  };

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

    fetchCityCoordinates(search.from, setCityA);
    fetchCityCoordinates(search.to, setCityB);

    if (!search.from && !search.to) {
      navigate(paths.home.path);
    }
  }, [search]);

  const calculateMidpoint = (
    pointA: [number, number],
    pointB: [number, number]
  ): [number, number] => {
    const lon1 = pointA[0];
    const lat1 = pointA[1];
    const lon2 = pointB[0];
    const lat2 = pointB[1];

    const midpointLon = (lon1 + lon2) / 2;
    const midpointLat = (lat1 + lat2) / 2;

    return [midpointLon, midpointLat];
  };

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    const initializeMap = () => {
      if (cityA && cityB) {
        const newMap = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: calculateMidpoint(cityA, cityB),
          zoom: 0,
        });

        const nav = new NavigationControl();
        newMap.addControl(nav, "top-right");

        // Calculate the bounds of the area containing both cities
        const bounds = new mapboxgl.LngLatBounds().extend(cityA).extend(cityB);

        // Set the map's bounds to contain both cities and fit the map to those bounds
        newMap.fitBounds(bounds, {
          padding: 100,
          maxZoom: 10,
        });

        // Add markers to the two cities
        new Marker({ color: "#000000", scale: 1.2 })
          .setLngLat(cityA)
          .addTo(newMap);
        new Marker({ color: "#000000", scale: 1.2 })
          .setLngLat(cityB)
          .addTo(newMap);
        setMap(newMap);

        // Draw the driving route between the two cities
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${cityA[0]},${cityA[1]};${cityB[0]},${cityB[1]}?geometries=geojson&access_token=${accessToken}&steps=true`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const routeCoordinates = data.routes[0].legs.reduce(
              (
                acc: [number, number][],
                leg: {
                  steps: { geometry: { coordinates: [number, number][] } }[];
                }
              ) => {
                acc.push(
                  ...leg.steps.map((step) => step.geometry.coordinates).flat()
                );
                return acc;
              },
              []
            );
            const radius = search.radius;
            if (radius) {
              // Add buffer to the route
              addBufferToRoute(newMap, routeCoordinates, radius);
            }

            async function fetchCompaniesAndTours(
              cityCoordinates: [number, number],
              radius: number
            ) {
              try {
                const [lng, lat] = cityCoordinates;

                const response = await fetch(
                  `http://localhost:5001/search/road?lat=${lat}&lng=${lng}&radius=${radius}`
                );

                const data = await response.json();
                console.log(data);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            }

            newMap.addSource("route", {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: routeCoordinates,
                },
              },
            });

            newMap.addLayer({
              id: "route",
              type: "line",
              source: "route",
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#888",
                "line-width": 2,
              },
            });

            if (cityA && cityB && search.radius) {
              fetchCompaniesAndTours(routeCoordinates, search.radius);
            }
          });
      }
    };

    if (!map) {
      initializeMap();
    }
  }, [map, cityA, cityB]);

  console.log(companies);

  useEffect(() => {
    if (map) {
      map.on("load", () => {
        map.addSource("world", {
          type: "vector",
          url: "mapbox://mapbox.country-boundaries-v1",
        });

        map.addLayer({
          id: "countries",
          type: "fill",
          source: "world",
          "source-layer": "country_boundaries",
          paint: {
            "fill-color": "#e6e6e6",
            "fill-opacity": 0.5,
          },
        });
      });
    }
  }, [map]);

  return <div id="map" style={{ width: "100vw", height: "93vh" }} />;
};

export default RoadTripMap;
