import { changeToDate } from "../utils/utils";
import config from "../config/config.json";
import { Worker } from "../moudels/Worker";

export const fetchWorkersList = async (): Promise<Worker[]> => {
  const res = await fetch(config.workersUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const list = await res.json();
  return list.map(changeToDate);
};

export const fetchLocalTime = async (worker: Worker): Promise<Worker> => {
  const X_Api_Key: string | undefined = import.meta.env.VITE_Api_Key;
  if (X_Api_Key == undefined) return worker;
  const latLonRes = await fetch(`${config.latLonUrl}?name=${worker.city}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": X_Api_Key,
    },
  });
  const latLonAns = await latLonRes.json();
  const timeRes = await fetch(
    `${config.localTimeUrl}?lat=${latLonAns[0].latitude}&lon=${latLonAns[0].longitude}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": X_Api_Key,
      },
    }
  );
  const timeAns = await timeRes.json();
  const time: string =
    timeAns.hour + ":" + timeAns.minute + ":" + timeAns.second;
  return { ...worker, localTime: time };
};
