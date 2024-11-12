import { WorkerItem } from "../WorkerItem/WorkerItem";
import { Worker } from "../../moudels/Worker";
import { ReactNode, useState } from "react";
import { fetchWorkersList, fetchLocalTime } from "../../services/servers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WorkersList = () => {
  const [workerItems, setWorkerItems] = useState<ReactNode[]>([]);
  if (workerItems.length == 0) {
    const promiseList = fetchWorkersList();
    toast.promise(promiseList, {
      error: "Error when fetching workers list",
    });
    promiseList
      .then((workersList: Worker[]) => {
        const timePromise = Promise.all(workersList.map(fetchLocalTime));
        toast.promise(timePromise, {
          error: "Error when fetching local time",
        });
        return timePromise;
      })
      .then((workersList: Worker[]) => {
        return workersList.map((worker: Worker) => {
          return <WorkerItem key={worker.id} workerInfo={worker} />;
        });
      })
      .then((items) => {
        setWorkerItems(items);
      });
  }
  return <div>{workerItems}</div>;
};
