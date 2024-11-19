import { useState, ReactNode, createContext, useEffect } from "react";
import { Worker } from "../../moudels/Worker.ts";
import { fetchWorkersList } from "../../services/Workers.ts";
import { fetchLocalTime } from "../../services/LocalTime.ts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { City } from "../../moudels/City.ts";
import { getCities } from "../../services/Cities.ts";
import { Context } from "../../moudels/Context.ts";

interface CitiesProviderProps {
  children: ReactNode;
}

export const CitiesContext = createContext<Context>({
  citiesList: [],
});

export const CitiesProvider = ({ children }: CitiesProviderProps) => {
  const [citiesList, setCitiesList] = useState<City[]>([]);
  useEffect(() => {
    if (citiesList.length === 0) {
      const workersPromise: Promise<Worker[]> = fetchWorkersList();
      workersPromise.then((workersPromise) => {
        setCitiesList(getCities(workersPromise));
      });
      toast.promise(workersPromise, {
        error: "Error when fetching workers list",
        pending: "Fetching workers list",
        success: "Get workers list!",
      });
    } else if (!citiesList[0].localTime) {
      const timePromise = Promise.all(citiesList.map(fetchLocalTime));
      timePromise.then((list: City[]) => {
        setCitiesList(list);
      });
      toast.promise(timePromise, {
        error: "Error when fetching local time",
        pending: "Fetching city info",
        success: "Get city Info!",
      });
    }
  }, [citiesList]);
  return (
    <CitiesContext.Provider
      value={{
        citiesList,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
