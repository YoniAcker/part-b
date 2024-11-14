import { WorkerItem } from "../WorkerItem/WorkerItem";
import { Worker } from "../../moudels/Worker";
import { useContext } from "react";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import "react-toastify/dist/ReactToastify.css";

export const WorkersList = () => {
  const { workersList } = useContext(WorkersContext);
  return (
    <div>
      {workersList.map((worker: Worker) => {
        return <WorkerItem key={worker.id} workerInfo={worker} />;
      })}
    </div>
  );
};
