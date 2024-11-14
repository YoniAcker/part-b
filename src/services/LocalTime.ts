import config from "../config/config.json";
import { Worker } from "../moudels/Worker";

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
  if (latLonRes.status != 200) {
    return worker;
  }
  const latLonAns = await latLonRes.json();
  worker.lat = latLonAns[0].latitude;
  worker.lon = latLonAns[0].longitude;
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
