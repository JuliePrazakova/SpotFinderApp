import { point } from "@turf/helpers";
import tCirlce from "@turf/circle";

export type LocationType = {
  lon: number;
  lat: number;
  radius: number;
};

export const getFeature = (location: LocationType) => {
  const center = point([location.lon, location.lat]);
  return {
    ...tCirlce(center, location.radius),
    id: `${location.lon}${location.lat}`,
    properties: {
      isCircle: true,
      center: [location.lon, location.lat],
      radiusInKm: location.radius,
    },
  };
};
