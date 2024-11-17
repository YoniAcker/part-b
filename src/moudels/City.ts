import { Worker } from "./Worker";

export interface City {
  name: string;
  workers: Worker[];
  lat?: number;
  lon?: number;
  localTime?: string;
}
