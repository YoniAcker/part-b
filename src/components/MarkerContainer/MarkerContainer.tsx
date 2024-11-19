import { Marker, Popup } from "react-leaflet";
import { City } from "../../moudels/City";
import { useRef, useEffect } from "react";
import { useContext } from "react";
import { CitiesContext } from "../CitiesProvider/CitiesProvider";
import { context } from "../../moudels/context.ts";

interface MarkerContainerProps {
  city: City;
}

export const MarkerContainer = ({ city }: MarkerContainerProps) => {
  const markerRef = useRef<L.Marker>(null);
  const { citiesList }: context = useContext(CitiesContext);
  const workersNames: string[] = city.workers.map(
    (worker) => `${worker.firstName} ${worker.lastName}`
  );
  useEffect(() => {
    if (markerRef.current) {
      console.log(markerRef.current.getElement());
      markerRef.current
        .getElement()
        ?.setAttribute("data-testid", `${city.name} marker`);
    }
  }, [citiesList]);
  return (
    <div>
      {city.lat && city.lon ? (
        <Marker ref={markerRef} position={[city.lat, city.lon]}>
          <Popup>{workersNames.join(",")}</Popup>
        </Marker>
      ) : null}
    </div>
  );
};
