import { WorkersMap } from "../WorkersMap/WorkersMap";
import { WorkersList } from "../WorkersList/WorkersList";
import { useNavigate } from "react-router-dom";
import "./WorkersPage.css";

export const WorkersPage = () => {
  const nav = useNavigate();
  return (
    <>
      <h1>Meet The Team</h1>
      <button onClick={() => nav("/map")}>Map</button>
      <WorkersList />
      <div id="bottomMap">
        <WorkersMap />
      </div>
    </>
  );
};
