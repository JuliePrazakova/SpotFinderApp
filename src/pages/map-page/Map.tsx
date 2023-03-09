import React, { useState } from "react";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { SearchItemType } from "../landing-page/search-bar/search-bar";

const Map = () => {
  const city = useSelector(
    (state: { search: SearchItemType }) => state.search.where
  );

  const cityMarker = new L.Icon({
    iconUrl: "marker-icon.png",
    iconRetinaUrl: "marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const [cityCoordinates, setCityCoordinates] = useState<
    [number, number] | undefined
  >();

  React.useEffect(() => {
    async function fetchCityCoordinates() {
      const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
      const response = await fetch(url);
      const data = await response.json();
      const coordinates: [number, number] = [data[0]?.lat, data[0]?.lon];
      setCityCoordinates(coordinates);
    }

    if (city) {
      fetchCityCoordinates();
    }
  }, []);

  console.log("tady: ", cityCoordinates);
  return (
    <>
      {cityCoordinates && (
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
        </MapContainer>
      )}
    </>
  );
};

export default Map;
