import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorkersMap.css";
import { useContext } from "react";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import { getMarkers } from "../../services/Markers.ts";
import config from "../../config/config.json";
import { MarkerContainer } from "../MarkerContainer/MarkerContainer.tsx";

export const WorkersMap = () => {
  const { workersList } = useContext(WorkersContext);
  return (
    <MapContainer
      id="mapCon"
      center={[50, -60]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer attribution={config.mapAttribution} url={config.MapUrl} />
      {getMarkers(workersList).map((marker) => {
        return <MarkerContainer marker={marker} />;
      })}
    </MapContainer>
  );
};
