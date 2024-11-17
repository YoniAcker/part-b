import { Worker } from "../moudels/Worker";
import { City } from "../moudels/City";

export const getCities = (workersList: Worker[]): City[] => {
  const cities: Record<string, City> = {};
  workersList.forEach((worker: Worker) => {
    if (worker.city in cities) cities[worker.city].workers.push(worker);
    else {
      const marker: City = {
        name: worker.city,
        workers: [worker],
      };
      cities[worker.city] = marker;
    }
  });
  return Object.values(cities);
};
