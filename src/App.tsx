import "./App.css";
import { WorkersList } from "./components/WorkersList/WorkersList";
import { config } from "dotenv";

config();

function App() {
  return (
    <>
      <h1>Meet The Team</h1>
      <WorkersList />
    </>
  );
}

export default App;
