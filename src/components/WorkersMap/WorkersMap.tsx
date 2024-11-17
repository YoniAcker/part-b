import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorkersMap.css";
import { useContext } from "react";
import { CitiesContext } from "../CitiesProvider/CitiesProvider.tsx";
import config from "../../config/config.json";
import { MarkerContainer } from "../MarkerContainer/MarkerContainer.tsx";
import { City } from "../../moudels/City.ts";

export const WorkersMap = () => {
  const { citiesList } = useContext(CitiesContext);
  return (
    <MapContainer
      id="mapCon"
      center={[50, -60]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer attribution={config.mapAttribution} url={config.MapUrl} />
      {citiesList.map((city: City) => {
        return <MarkerContainer key={city.name} city={city} />;
      })}
    </MapContainer>
  );
};
