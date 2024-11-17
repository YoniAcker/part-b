import "./App.css";
import { MapPage } from "./components/MapPage/MapPage";
import { WorkersPage } from "./components/WorkersPage/WorkersPage";
import { CitiesProvider } from "./components/CitiesProvider/CitiesProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WorkersPage />}></Route>
            <Route path="/map" element={<MapPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
};
