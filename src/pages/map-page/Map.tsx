import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap, Circle } from "react-leaflet";
import L from "leaflet";
import { SearchItemType } from "../landing-page/search-bar/search-bar";
import { useNavigate } from "react-router-dom";
import paths from "../../utilities/pathnames";

const Map = () => {
  const navigate = useNavigate();
  const search = useSelector(
    (state: { search: SearchItemType }) => state.search
  );

  if (!search) {
    return null;
  }

  const filter = {
    where: search.where,
    from: search.from,
    to: search.to,
    radius: search.radius,
  };
  const cityMarker = new L.Icon({
    iconUrl: "./images/marker-icon.png",
    iconSize: [30, 31],
    iconAnchor: [13, 31],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const [cityCoordinates, setCityCoordinates] = useState<
    [number, number] | undefined
  >();
  const [cityA, setCityA] = useState<[number, number] | undefined>();
  const [cityB, setCityB] = useState<[number, number] | undefined>();
  // const [routeCoordinates, setRouteCoordinates] =
  //   useState<[number, number][]>();

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

    // async function fetchRouteCoordinates() {
    //   if (cityA && cityB) {
    //     const url = `https://api.openrouteservice.org/v2/directions/driving-car?start=${cityA[1]},${cityA[0]}&end=${cityB[1]},${cityB[0]}&units=m`;
    //     const response = await fetch(url, {
    //       headers: {
    //         Accept:
    //           "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
    //         Authorization: "your-api-key-here",
    //       },
    //     });
    //     const data = await response.json();
    //     const coordinates = data.features[0]?.geometry.coordinates;
    //     if (coordinates) {
    //       setRouteCoordinates(
    //         coordinates.map((coord: [number, number]) => [coord[1], coord[0]])
    //       );
    //     }
    //   }
    // }

    if (filter.where) {
      fetchCityCoordinates(filter.where, setCityCoordinates);
    } else if (filter.from && filter.to) {
      fetchCityCoordinates(filter.from, setCityA);
      fetchCityCoordinates(filter.to, setCityB);
      // fetchRouteCoordinates();
    } else {
      navigate(paths.home.path);
    }
  }, [filter.where, filter.from, filter.to]);

  // Centers the map to view both searched cities and road between them
  function SetBounds() {
    const map = useMap();
    if (cityA && cityB) {
      const bounds = L.latLngBounds(cityA, cityB);
      map.fitBounds(bounds);
    }
    return null;
  }

  // let roadLine: Position[] = [];
  // if (cityA && cityB) {
  //   roadLine = [cityA, cityB];
  // }

  // let roadLine2: LatLngExpression[] = [];
  // if (cityA && cityB) {
  //   roadLine2 = [cityA, cityB].map(
  //     ([lat, lng]) => [lat, lng] as LatLngExpression
  //   );
  // }

  // const bufferZone = buffer(lineString(roadLine), filter.radius / 1000, {
  //   units: "kilometers",
  //   steps: 64,
  // });

  return (
    <>
      {cityCoordinates ? (
        <MapContainer
          style={{ height: "1000px" }}
          center={cityCoordinates}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={cityCoordinates} icon={cityMarker} />
          <Circle
            center={cityCoordinates}
            radius={filter.radius * 1000}
            pathOptions={{
              color: "#f00",
              opacity: 0.5,
              fillOpacity: 0.2,
            }}
            fill={true}
          />
        </MapContainer>
      ) : (
        cityA &&
        // routeCoordinates && // {routeCoordinates && <Polyline positions={routeCoordinates} />}{" "}
        cityB && (
          <MapContainer style={{ height: "1000px" }} center={cityA} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cityA && <Marker position={cityA} icon={cityMarker} />}
            {cityB && <Marker position={cityB} icon={cityMarker} />}
            <SetBounds />
          </MapContainer>
        )
      )}
    </>
  );
};

export default Map;
