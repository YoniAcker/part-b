import { WorkerItem } from "../WorkerItem/WorkerItem";
import { useContext } from "react";
import { CitiesContext } from "../CitiesProvider/CitiesProvider";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../../moudels/context.ts";

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
