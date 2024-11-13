import { Worker } from "../moudels/Worker";

interface Marker {
  city: string;
  workers: string;
  lat: number;
  lon: number;
}

export const getMarkers = (workersList: Worker[]): Marker[] => {
  workersList.sort((workerA, workerB) =>
    workerA.city.localeCompare(workerB.city)
  );
  return workersList.reduce((accumulator: Marker[], worker: Worker) => {
    console.log(accumulator, worker);
    const fullName = `${worker.firstName} ${worker.lastName}`;
    if (
      accumulator.length > 0 &&
      accumulator[accumulator.length - 1].city == worker.city
    ) {
      accumulator[accumulator.length - 1].workers = `${
        accumulator[accumulator.length - 1]
      }\n${fullName}`;
      return accumulator;
    }
    if (worker.lat == undefined || worker.lon == undefined) {
      return accumulator;
    }
    accumulator.push({
      city: worker.city,
      workers: fullName,
      lat: worker.lat,
      lon: worker.lon,
    });
    return accumulator;
  }, []);
};
