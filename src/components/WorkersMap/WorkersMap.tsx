import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorkersMap.css";
import { useContext } from "react";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import { Worker } from "../../moudels/Worker";

interface Marker {
  city: string;
  workers: string[];
  lat?: number;
  lon?: number;
}

export const WorkersMap = () => {
  const { workersList } = useContext(WorkersContext);
  workersList.sort((workerA, workerB) =>
    workerA.city.localeCompare(workerB.city)
  );
  const markers: Marker[] = workersList.reduce(
    (accumulator: Marker[], worker: Worker) => {
      const fullName = `${worker.firstName} ${worker.lastName}`;
      if (
        accumulator.length > 0 &&
        accumulator[accumulator.length - 1].city == worker.city
      ) {
        accumulator[accumulator.length - 1].workers.push(fullName);
        return accumulator;
      }
      accumulator.push({
        city: worker.city,
        workers: [fullName],
        lat: worker.lat,
        lon: worker.lon,
      });
      return accumulator;
    },
    []
  );
  return (
    <MapContainer
      id="mapCon"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};