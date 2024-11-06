import WorkerItem from "./WorkerItem";
import Worker from "../moudels/Worker";
import { useEffect, useState } from "react";

const WorkersList = () => {
    const [workersList, setWorkersList] = useState<Worker[]>([]);

    const fetchWorkersList = async () => {
        const res = await fetch("http://localhost:3030/api/employees", {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            }
        })
        if (res.status != 200) {
            alert ("Can't get workers from server!");
            return;
        }
        const list : Worker[] = await res.json();
        console.log(list);
        setWorkersList(list);
    }

    const fetchLocalTime = async (worker: Worker) => {
        const res = await fetch("https://api.api-ninjas.com/v1/worldtime?city=" + worker.city, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "lf1hB2+u4zgGbhE29qEUDA==kpy8Rs9DX3sOTGGc"
            }
        })
        if (res.status != 200) {
            alert ("Can't get local time from server!");
            return;
        }
        const ans = await res.json();
        const time : string = ans.hour + ":" + ans.minute + ":" + ans.seconds;
        return {...worker, localTiime: time};
    }

    useEffect(() => {
        fetchWorkersList();
        workersList.map(fetchLocalTime);
      }, []
    );

    return (
        <div>vrev</div>
    );
}

export default WorkersList;