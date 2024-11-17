import { WorkersMap } from "../WorkersMap/WorkersMap";
import { useNavigate } from "react-router-dom";
import "./MapPage.css";

export const MapPage = () => {
  const nav = useNavigate();
  return (
    <div id="mapPage">
      <h1 id="mapTitle">The Map</h1>
      <button id="teamButton" onClick={() => nav("/")}>
        Team
      </button>
      <WorkersMap />
    </div>
  );
};
