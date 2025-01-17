import { Typography } from "@mui/material";
import { Worker } from "../../moudels/Worker";
import { SocialButtonsList } from "../SocialButtonList/SocialButtonsList";
import "@fontsource/roboto/300.css";
import Dialog from "@mui/material/Dialog";
import "./WorkerInfoModal.css";

interface WorkerProps {
  workerInfo: Worker;
  localTime: string | undefined;
  onClose: () => void;
  open: boolean;
}
export const WorkerInfoModal = ({
  workerInfo,
  localTime,
  onClose,
  open,
}: WorkerProps) => {
  let age: number | null;
  try {
    age = new Date().getFullYear() - workerInfo.birthDate.getFullYear();
  } catch (error) {
    age = null;
  }
  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <div id="dialogContainer">
        <img src={workerInfo.imageUrl} alt="Team Image" id="dialogImage" />
        <Typography variant="h2" gutterBottom>
          {workerInfo.firstName + " " + workerInfo.lastName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {workerInfo.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {age} years old
        </Typography>
        {localTime ? (
          <Typography data-testid="loaclTime" variant="h5" gutterBottom>
            {"  "}
            Local Time: {localTime}
            {"  "}
          </Typography>
        ) : null}
        <Typography variant="h5" gutterBottom>
          Timezone: {workerInfo.city}
        </Typography>
        <hr id="dialogHr" />
        <Typography id="workerDesc" variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          vehicula nisl. Ut mauris metus, fermentum nec orci nec, sagittis
          laoreet eros.
        </Typography>
        <br />
        <SocialButtonsList />
      </div>
    </Dialog>
  );
};
