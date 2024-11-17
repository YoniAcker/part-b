import { WorkerItem } from "../WorkerItem/WorkerItem";
import { City } from "../../moudels/City";
import { useContext } from "react";
import { CitiesContext } from "../CitiesProvider/CitiesProvider";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode } from "react";

interface context {
  citiesList: City[];
}

export const WorkersList = () => {
  const { citiesList }: context = useContext(CitiesContext);
  const workerItems: ReactNode[] = [];
  citiesList.forEach((city) => {
    city.workers.forEach((worker) => {
      workerItems.push(
        <WorkerItem
          key={worker.id}
          localTime={city.localTime}
          workerInfo={worker}
        />
      );
    });
  });
  return <div className="row justify-content-center">{workerItems}</div>;
};
