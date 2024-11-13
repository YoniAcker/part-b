import "./App.css";
import { WorkersMap } from "./components/WorkersMap/WorkersMap";
import { WorkersList } from "./components/WorkersList/WorkersList";
import { WorkersProvider } from "./components/WorkersProvider/WorkersProvider";

function App() {
  return (
    <>
      <h1>Meet The Team</h1>
      <WorkersProvider>
        <WorkersList />
        <WorkersMap />
      </WorkersProvider>
    </>
  );
}

export default App;
