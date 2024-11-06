import './App.css'
import Worker from './components/Worker'

function App() {
  return (
    <Worker workerInfo={{id: 1, firstName: "Chandler", lastName: "Bing", title: "something",
       country: "USA", city: "New York", birthDate: new Date("1995-03-17"), imageUrl: "../download.jpeg", time:"12:33:15" }}/>
  )
}

export default App
