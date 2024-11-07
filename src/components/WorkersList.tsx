import WorkerItem from "./WorkerItem";
import Worker from "../moudels/Worker";
import { ReactNode, useEffect, useState } from "react";

const WorkersList = () => {
    const [workersList, setWorkersList] = useState<Worker[]>([]);
    const [workerItems, setWorkerItems] = useState<ReactNode>([]);

    const fetchWorkersList = async () => { //useQuery
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
    useEffect(() => {console.log(workersList)}, [workersList])

    const fetchLocalTime = async (worker: Worker): Promise<Worker> => {
        const latLonRes = await fetch("https://api.api-ninjas.com/v1/city?name=" + worker.city, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "lf1hB2+u4zgGbhE29qEUDA==kpy8Rs9DX3sOTGGc"
            }
        })
        if (latLonRes.status != 200) {
            alert ("Can't get local time from server!");
            return {...worker};
        }
        const latLonAns = await latLonRes.json();
        const timeRes = await fetch("https://api.api-ninjas.com/v1/worldtime?lat=" 
            + latLonAns.lat + "&lon=" + latLonAns.lon, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "lf1hB2+u4zgGbhE29qEUDA==kpy8Rs9DX3sOTGGc"
            }
        })
        if (timeRes.status != 200) {
            alert ("Can't get local time from server!");
            return {...worker};
        }
        const timeAns = await timeRes.json();
        const time : string = timeAns.hour + ":" + timeAns.minute + ":" + timeAns.seconds;
        return {...worker, localTime: time};
    }

    useEffect(() => {
        fetchWorkersList();
        Promise.all(workersList.map(fetchLocalTime)).then((updatedList: Worker[]) => {
        setWorkersList(updatedList);
        })
        setWorkerItems(workersList.map((worker: Worker) => {
            return <WorkerItem workerInfo={worker}/>
        }))
      }, [workersList]
    );

    return (
        <div>
            {workerItems}
        </div>
    );
}

export default WorkersList;