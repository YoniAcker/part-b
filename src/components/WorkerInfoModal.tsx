import { Typography } from "@mui/material";
import { Worker } from "../moudels/Worker";
import { SocialButtonsList } from "./SocialButtonsList";
import "@fontsource/roboto/300.css";
import Dialog from "@mui/material/Dialog";

interface WorkerProps {
  workerInfo: Worker;
  onClose: () => void;
  open: boolean;
}
export const WorkerInfoModal = ({ workerInfo, onClose, open }: WorkerProps) => {
  const age: number =
    new Date().getFullYear() - workerInfo.birthDate.getFullYear();
  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <div style={{ padding: "7rem" }}>
        <img
          src={workerInfo.imageUrl}
          alt="Team Image"
          style={{
            width: "40rem",
            borderRadius: "4rem",
            marginBottom: "10rem",
          }}
        />
        <Typography variant="h2" gutterBottom>
          {workerInfo.firstName + " " + workerInfo.lastName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {workerInfo.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {age} years old
        </Typography>
        <Typography variant="h5" gutterBottom>
          Local Time: {workerInfo.localTime}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Timezone: {workerInfo.city}
        </Typography>
        <hr style={{ margin: "20px 0" }} />
        <Typography variant="subtitle1" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          vehicula nisl. Ut mauris metus, fermentum nec orci nec, sagittis
          laoreet eros. Nam porta luctus mi, sodales aliquam nibh convallis ac.
          Nunc tempor malesuada lobortis. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Phasellus eu
          tristique enim. Sed id malesuada velit. Suspendisse ut nisi quis neque
          venenatis vestibulum id non ipsum. Aliquam aliquet dapibus nisi, ut
          tempor massa hendrerit ut. Sed efficitur ex posuere, interdum turpis
          a, maximus urna. Aenean sed sapien nec erat viverra lobortis cursus
          sit amet ex. Maecenas vel tempus mi, volutpat maximus tortor.
          Suspendisse tempus eget ligula id mattis. Nam porttitor mauris a
          accumsan convallis.
        </Typography>
        <br />
        <SocialButtonsList />
      </div>
    </Dialog>
  );
};
