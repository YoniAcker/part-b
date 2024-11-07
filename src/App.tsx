import "./App.css";
import { WorkerItem } from "./components/WorkerItem/WorkerItem";

function App() {
  return (
    <WorkerItem
      workerInfo={{
        id: 1,
        firstName: "Chandler",
        lastName: "Bing",
        title: "something",
        country: "USA",
        city: "New York",
        birthDate: new Date("1995-03-17"),
        imageUrl: "../download.jpeg",
        localTime: "12:33:15",
      }}
    />
  );
}

export default App;
