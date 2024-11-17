import config from "../config/config.json";
import { City } from "../moudels/City";

export const fetchLocalTime = async (city: City): Promise<City> => {
  const ApiKey: string | undefined = import.meta.env.VITE_API_KEY;
  if (!ApiKey) throw new Error("Can't fatch Local time from server");
  const latLonRes = await fetch(`${config.latLonUrl}?name=${city.name}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": ApiKey,
    },
  });
  if (latLonRes.status !== 200) {
    throw new Error("Can't fatch Local time from server");
  }
  const latLonAns = await latLonRes.json();
  city.lat = latLonAns[0].latitude;
  city.lon = latLonAns[0].longitude;
  const timeRes = await fetch(
    `${config.localTimeUrl}?lat=${latLonAns[0].latitude}&lon=${latLonAns[0].longitude}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": ApiKey,
      },
    }
  );
  if (timeRes.status !== 200) {
    throw new Error("Can't fatch Local time from server");
  }
  const timeAns = await timeRes.json();
  const time: string = `${timeAns.hour} : ${timeAns.minute} : ${timeAns.second}`;
  city.localTime = time;
  return city;
};
