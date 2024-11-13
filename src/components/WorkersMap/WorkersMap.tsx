import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorkersMap.css";
import { useContext } from "react";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import { getMarkers } from "../../services/Markers";

export const WorkersMap = () => {
  const { workersList } = useContext(WorkersContext);
  return (
    <MapContainer
      id="mapCon"
      center={[50, -60]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getMarkers(workersList).map((marker) => {
        return (
          <Marker position={[marker.lat, marker.lon]}>
            <Popup>{marker.workers}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
