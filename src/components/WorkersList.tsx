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
    useEffect(() => {
        fetchWorkersList()
      }, []
    );
    return (
        <div>vrev</div>
    );
}

export default WorkersList;