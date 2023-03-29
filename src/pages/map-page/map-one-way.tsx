import React, { useState, useEffect } from "react";
import mapboxgl, { Marker, NavigationControl } from "mapbox-gl";
import { useSelector } from "react-redux";
import { SearchItemType } from "../../utilities/types";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";
import turf from "turf";

const OneWayMap: React.FC = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
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

  const addBufferToCity = (
    map: mapboxgl.Map,
    cityCoordinates: [number, number],
    radius: number
  ) => {
    let point;
    if (cityCoordinates) {
      point = turf.point(cityCoordinates);

      const buffer = turf.buffer(
        {
          type: "FeatureCollection",
          features: [point],
        },
        radius,
        "kilometers"
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
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    const initializeMap = () => {
      if (cityCoordinates) {
        const newMap = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: cityCoordinates,
          zoom: 8,
          preserveDrawingBuffer: true,
        });

        const nav = new NavigationControl();
        newMap.addControl(nav, "top-right");
        newMap.on("load", () => {
          if (search.radius) {
            // Add buffer to the route
            addBufferToCity(newMap, cityCoordinates, search.radius);
          }
        });

        new Marker({ color: "#000000", scale: 1.2 })
          .setLngLat(cityCoordinates)
          .addTo(newMap);
        setMap(newMap);

        setMap(newMap);
      }
    };

    if (!map) {
      initializeMap();
    }
  }, [map, cityCoordinates]);

  return (
    <div
      id="map"
      style={{ width: "100vw", height: "95vh", aspectRatio: "1 / 1" }}
    />
  );
};

export default OneWayMap;
