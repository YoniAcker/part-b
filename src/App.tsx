import "./App.css";
import { MapPage } from "./components/MapPage/MapPage";
import { WorkersPage } from "./components/WorkersPage/WorkersPage";
import { WorkersProvider } from "./components/WorkersProvider/WorkersProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <WorkersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkersPage />}></Route>
          <Route path="/map" element={<MapPage />}></Route>
        </Routes>
      </BrowserRouter>
    </WorkersProvider>
  );
};
