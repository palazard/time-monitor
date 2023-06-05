import ProjectButton from '../components/ProjectButton';
// import ProgressWindows from "../components/ProgressWindows";
import Clock from '../components/Clock';
import './App.css';
import { useState } from 'react';

const projects = ["Formation Code", "Job"];

function App() {

  const [counting, setCounting] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [activeProject, setActiveProject] = useState('');

  const countTime = (event) => {
    console.log(event.target.value);
    if(counting === false){
        const date = new Date(Date.now());
        const startingTime = date.getTime();
        // console.log(date);
        // console.log("starting time : ", startingTime);
        setStartTime(startingTime);
        setCounting(true);
        setActiveProject(event.target.value);
    } else if (counting === true) {
        const date = new Date(Date.now());
        const endingTime = date.getTime();
        // const totalTime = endingTime-startTime;
        // console.log(date);
        // console.log("ending time : ", endingTime);
        // console.log("totalTime", totalTime);
        setEndTime(endingTime);
        setCounting(false);
        setActiveProject('');
    }
  }

  return (
    <div className="App">
      <div className="container text-center" style={{height: "100vh"}}>
        <div className="row align-items-center justify-content-center align-items-center h-100">
          <div className="col d-flex align-items-center justify-content-center align-items-center">
            {projects.map((project,i) => {
               return <ProjectButton countTime={countTime} name={project} activeProject={activeProject} key={i}/>
            })}
          </div>
          <div className="col">
            <div className="d-flex flex-column p-2">
              <p>Working on:</p>
              <p>{activeProject}</p>
            </div>
            <div className="d-flex flex-column p-2">
              <p>Time:</p>
              <Clock counting={counting}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
