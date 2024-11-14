import { WorkerItem } from "../WorkerItem/WorkerItem";
import { Worker } from "../../moudels/Worker.ts";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import { useContext } from "react";
import { fetchWorkersList } from "../../services/Workers.ts";
import { fetchLocalTime } from "../../services/LocalTime.ts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WorkersList = () => {
  const { workersList, setWorkersList } = useContext(WorkersContext);
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
    <div>
      {workersList.map((worker: Worker) => {
        return <WorkerItem key={worker.id} workerInfo={worker} />;
      })}
    </div>
  );
};
