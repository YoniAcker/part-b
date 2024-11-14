import { Worker } from "../moudels/Worker";
import { MarkerInfo } from "../moudels/MarkerInfo";


export const getMarkers = (workersList: Worker[]): MarkerInfo[] => {
  const sortedList = [...workersList].sort((workerA, workerB) =>
    workerA.city.localeCompare(workerB.city)
  );
  return sortedList.reduce((accumulator: MarkerInfo[], worker: Worker) => {
    const fullName = `${worker.firstName} ${worker.lastName}`;
    if (worker.lat != undefined && worker.lon != undefined) {
      if (accumulator.length == 0) {
        accumulator.push({
          id: 1,
          city: worker.city,
          workers: fullName,
          lat: worker.lat,
          lon: worker.lon,
        });
      } else if (accumulator[accumulator.length - 1].city == worker.city) {
        accumulator[accumulator.length - 1].workers = `${
          accumulator[accumulator.length - 1].workers
        }\n${fullName}`;
        return accumulator;
      } else {
        accumulator.push({
          id: accumulator[accumulator.length - 1].id + 1,
          city: worker.city,
          workers: fullName,
          lat: worker.lat,
          lon: worker.lon,
        });
      }
    }
    return accumulator;
  }, []);
};
