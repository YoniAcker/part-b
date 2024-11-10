import { useState, ReactNode, createContext } from "react";
import { Worker } from "../../moudels/Worker";

interface WorkersProviderProps {
  children: ReactNode;
}
interface context {
  workersList: Worker[];
  setWorkersList: (list: Worker[]) => void;
}

export const WorkersContext = createContext<context>({
  workersList: [],
  setWorkersList: ([]) => {
    return [];
  },
});

export const WorkersProvider = ({ children }: WorkersProviderProps) => {
  const [workersList, setWorkersList] = useState<Worker[]>([]);
  return (
    <WorkersContext.Provider
      value={{
        workersList: workersList,
        setWorkersList: (list: Worker[]) => setWorkersList(list),
      }}
    >
      {children}
    </WorkersContext.Provider>
  );
};
