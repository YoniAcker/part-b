import { WorkerInfoModal } from "../WorkerInfoModal/WorkerInfoModal";
import { Worker } from "../../moudels/Worker";
import { useState } from "react";

interface WorkerProps {
  workerInfo: Worker;
}

export const WorkerItem = ({ workerInfo }: WorkerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <h4>
              {workerInfo.firstName} {workerInfo.lastName}
            </h4>
            <h5 className="muted regular">{workerInfo.title}</h5>
            <h5 className="muted regular">
              {workerInfo.city}, {workerInfo.country}
            </h5>
          </div>
          <button onClick={handleClickOpen} className="btn btn-blue-fill">
            About Me
          </button>
        </div>
      </div>
      <WorkerInfoModal
        workerInfo={workerInfo}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};
