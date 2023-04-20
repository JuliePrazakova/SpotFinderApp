import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap, Circle } from "react-leaflet";
import L from "leaflet";
import { MapProps } from "../../utilities/types";

const Map: React.FunctionComponent<MapProps> = ({
  cityCoordinates,
  cityA,
  cityB,
  radius,
  companies,
}) => {
  // marker design
  const cityMarker = new L.Icon({
    iconUrl: "./images/marker-icon.png",
    iconSize: [30, 31],
    iconAnchor: [13, 31],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  // Centers the map to view both searched cities and road between them
  function SetBounds() {
    const map = useMap();
    if (cityA && cityB) {
      const bounds = L.latLngBounds(cityA, cityB);
      map.fitBounds(bounds);
    }
    return null;
  }
  console.log("loguju data aby to nekricelo ze je nepouzivam", companies);

  return (
    <>
      {cityCoordinates ? (
        <MapContainer
          style={{ height: "93vh", float: "right", width: "100%" }}
          center={cityCoordinates}
          zoom={11}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={cityCoordinates} icon={cityMarker} />

          <Circle
            center={cityCoordinates}
            radius={radius * 1000}
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

// const [routeCoordinates, setRouteCoordinates] =
//   useState<[number, number][]>();
