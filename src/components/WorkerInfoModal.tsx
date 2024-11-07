import { Typography } from "@mui/material";
import { Worker } from "../moudels/Worker";
import { SocialButtonsList } from "./SocialButtonsList";
import "@fontsource/roboto/300.css";

interface WorkerProps {
  workerInfo: Worker;
}
export const WorkerInfoModal = ({ workerInfo }: WorkerProps) => {
  const age: number =
    new Date().getFullYear() - workerInfo.birthDate.getFullYear();
  return (
    <>
      <div id="modals">
        <div
          className="modal fade"
          id="modal1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <a href="#" className="close-link">
                <i className="icon_close_alt2"></i>
              </a>
              <img
                src={workerInfo.imageUrl}
                alt="Team Image"
                className="shit"
              />
              <Typography variant="h2" gutterBottom>
                {workerInfo.firstName + " " + workerInfo.lastName}
              </Typography>
              <Typography variant="h4" gutterBottom>
                {workerInfo.title}
              </Typography>
              <Typography variant="h4" gutterBottom>
                {age} years old
              </Typography>
              <Typography variant="h4" gutterBottom>
                {workerInfo.localTime}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Timezone: {workerInfo.city}
              </Typography>
              <hr />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontSize: "1.2rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vel vehicula nisl. Ut mauris metus, fermentum nec orci
                nec, sagittis laoreet eros. Nam porta luctus mi, sodales aliquam
                nibh convallis ac. Nunc tempor malesuada lobortis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Phasellus eu tristique enim. Sed id malesuada
                velit. Suspendisse ut nisi quis neque venenatis vestibulum id
                non ipsum. Aliquam aliquet dapibus nisi, ut tempor massa
                hendrerit ut. Sed efficitur ex posuere, interdum turpis a,
                maximus urna. Aenean sed sapien nec erat viverra lobortis cursus
                sit amet ex. Maecenas vel tempus mi, volutpat maximus tortor.
                Suspendisse tempus eget ligula id mattis. Nam porttitor mauris a
                accumsan convallis.
              </Typography>
              <br />
              <SocialButtonsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
