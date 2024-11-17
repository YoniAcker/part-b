import { WorkerItem } from "../WorkerItem/WorkerItem";
import { City } from "../../moudels/City";
import { useContext } from "react";
import { CitiesContext } from "../CitiesProvider/CitiesProvider";
import "react-toastify/dist/ReactToastify.css";

interface context {
  citiesList: City[];
}

export const WorkersList = () => {
  const { citiesList }: context = useContext(CitiesContext);

  return (
    <div className="row justify-content-center">
      {citiesList.map((city) =>
        city.workers.map((worker) => (
          <WorkerItem
            key={worker.id}
            localTime={city.localTime}
            workerInfo={worker}
          />
        ))
      )}
    </div>
  );
};
