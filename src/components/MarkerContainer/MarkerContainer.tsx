import { Marker, Popup } from "react-leaflet";
import { City } from "../../moudels/City";

interface MarkerContainerProps {
  city: City;
}

export const MarkerContainer = ({ city }: MarkerContainerProps) => {
  const workersNames: string[] = city.workers.map(
    (worker) => `${worker.firstName} ${worker.lastName}`
  );
  return (
    <div>
      {city.lat && city.lon ? (
        <Marker position={[city.lat, city.lon]}>
          <Popup>{workersNames.join(",")}</Popup>
        </Marker>
      ) : null}
    </div>
  );
};
