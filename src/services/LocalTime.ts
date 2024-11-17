import config from "../config/config.json";
import { City } from "../moudels/City";

interface LatLonAns {
  country: string;
  is_capital: boolean;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
}

interface TimeAns {
  date: Date;
  datetime: Date;
  day: number;
  day_of_week: string;
  hour: number;
  minute: number;
  month: number;
  second: number;
  year: number;
  timezone: string;
}

export const fetchLocalTime = async (city: City): Promise<City> => {
  const APIKEY: string | undefined = import.meta.env.VITE_API_KEY;
  if (!APIKEY) throw new Error("There is no api key");
  const latLonRes = await fetch(`${config.latLonUrl}?name=${city.name}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": APIKEY,
    },
  });
  if (latLonRes.status !== 200) {
    throw new Error("Can't fatch Local time from server");
  }
  const latLonAns: LatLonAns[] = await latLonRes.json();
  city.lat = latLonAns[0].latitude;
  city.lon = latLonAns[0].longitude;
  const timeRes = await fetch(
    `${config.localTimeUrl}?lat=${latLonAns[0].latitude}&lon=${latLonAns[0].longitude}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": APIKEY,
      },
    }
  );
  if (timeRes.status !== 200) {
    throw new Error("Can't fatch Local time from server");
  }
  const timeAns: TimeAns = await timeRes.json();
  const time: string = `${timeAns.hour} : ${timeAns.minute} : ${timeAns.second}`;
  city.localTime = time;
  return city;
};
