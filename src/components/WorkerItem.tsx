import { WorkerInfoModal } from "./WorkerInfoModal";
import { Worker } from "../moudels/Worker";

interface WorkerProps {
  workerInfo: Worker;
}

export const WorkerItem = ({ workerInfo }: WorkerProps) => {
  return (
    <>
      <div className="col-md-4">
        <div className="team text-center">
          <img
            src={workerInfo.imageUrl}
            alt="Worker Image"
            className="avatar"
          />
          <div className="title">
            <h4>{workerInfo.firstName + " " + workerInfo.lastName}</h4>
            <h5 className="muted regular">{workerInfo.title}</h5>
            <h5 className="muted regular">
              {workerInfo.city + ", " + workerInfo.country}
            </h5>
          </div>
          <button
            data-toggle="modal"
            data-target="#modal1"
            className="btn btn-blue-fill"
          >
            About Me
          </button>
        </div>
      </div>
      <WorkerInfoModal workerInfo={workerInfo} />
    </>
  );
};
