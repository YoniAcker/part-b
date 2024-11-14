import { Marker, Popup } from "react-leaflet";
import { MarkerInfo } from "../../moudels/MarkerInfo";

interface MarkerContainerProps {
  marker: MarkerInfo;
}

export const MarkerContainer = ({ marker }: MarkerContainerProps) => {
  return (
    <Marker position={[marker.lat, marker.lon]}>
      <Popup>{marker.workers}</Popup>
    </Marker>
  );
};
