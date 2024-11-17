import { Worker } from "../moudels/Worker";

type workerWithoutBD = Omit<Worker, "birthDate">;
interface workerWithStringBD extends workerWithoutBD {
  birthDate: Date;
}

export const changeToDate = (worker: workerWithStringBD): Worker => {
  const { birthDate: string, ...workerWithoutBD } = worker;
  const birthDate = new Date(worker.birthDate);
  return { ...workerWithoutBD, birthDate };
};
