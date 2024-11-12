import { WorkerItem } from "../WorkerItem/WorkerItem";
import { Worker } from "../../moudels/Worker";
import { WorkersContext } from "../WorkersProvider/WorkersProvider";
import { useContext } from "react";

export const WorkersList = () => {
  const fetchWorkersList = async () => {
    try {
      const res = await fetch("http://localhost:3030/api/employees", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      alert("Can't get workers from server!");
      return [];
    }
  };

  const fetchLocalTime = async (worker: Worker): Promise<Worker> => {
    try {
      const latLonRes = await fetch(
        "https://api.api-ninjas.com/v1/city?name=" + worker.city,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "l3GnNztJXP8ba/EKYgkkVw==03kE5vXWxMyvZvBy",
          },
        }
      );
      const latLonAns = await latLonRes.json();
      worker.lat = latLonAns[0].latitude;
      worker.lon = latLonAns[0].longitude;
      const timeRes = await fetch(
        "https://api.api-ninjas.com/v1/worldtime?lat=" +
          latLonAns[0].latitude +
          "&lon=" +
          latLonAns[0].longitude,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "lf1hB2+u4zgGbhE29qEUDA==kpy8Rs9DX3sOTGGc",
          },
        }
      );
      const timeAns = await timeRes.json();
      const time: string =
        timeAns.hour + ":" + timeAns.minute + ":" + timeAns.second;
      return { ...worker, localTime: time };
    } catch (error) {
      alert("Can't get local time from server!");
      return worker;
    }
  };
  const { workersList, setWorkersList } = useContext(WorkersContext);
  if (workersList.length == 0) {
    fetchWorkersList()
      .then((workersList: Worker[]) => {
        return Promise.all(workersList.map(fetchLocalTime));
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
