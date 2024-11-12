import { Worker } from "../moudels/Worker";

interface workerWithStringBD {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  country: string;
  city: string;
  birthDate: string;
  imageUrl: string;
  localTime?: string;
}

export const changeToDate = (worker: workerWithStringBD): Worker => {
  const { birthDate: string, ...workerWithoutBD } = worker;
  const birthDate = new Date(worker.birthDate);
  return { ...workerWithoutBD, birthDate };
};
