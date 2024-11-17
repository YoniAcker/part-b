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
  if (res.status != 200) {
    throw new Error("Can't fatch workers from server");
  }
  const list = await res.json();
  return list.map(changeToDate);
};
