import { useState, ReactNode, createContext } from "react";
import { Worker } from "../../moudels/Worker";
import { fetchWorkersList } from "../../services/Workers.ts";
import { fetchLocalTime } from "../../services/LocalTime.ts";
import { toast } from "react-toastify";

interface WorkersProviderProps {
  children: ReactNode;
}
interface context {
  workersList: Worker[];
}

export const WorkersContext = createContext<context>({
  workersList: [],
});

export const WorkersProvider = ({ children }: WorkersProviderProps) => {
  const [workersList, setWorkersList] = useState<Worker[]>([]);
  if (workersList.length == 0) {
    const promiseList: Promise<Worker[]> = fetchWorkersList();
    toast.promise(promiseList, {
      error: "Error when fetching workers list",
    });
    promiseList
      .then((promiseList): Promise<Worker[]> => {
        const timePromise = Promise.all(promiseList.map(fetchLocalTime));
        toast.promise(timePromise, {
          error: "Error when fetching local time",
        });
        return timePromise;
      })
      .then((list: Worker[]) => {
        setWorkersList(list);
      });
  }
  return (
    <WorkersContext.Provider
      value={{
        workersList: workersList,
      }}
    >
      {children}
    </WorkersContext.Provider>
  );
};
