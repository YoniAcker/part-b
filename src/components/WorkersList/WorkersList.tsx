import { WorkerItem } from "../WorkerItem/WorkerItem";
import { Worker } from "../../moudels/Worker";
import { ReactNode, useState } from "react";

export const WorkersList = () => {
  const [workerItems, setWorkerItems] = useState<ReactNode[]>([]);
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

  if (workerItems.length == 0) {
    fetchWorkersList()
      .then((workersList: Worker[]) => {
        return Promise.all(workersList.map(fetchLocalTime));
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
