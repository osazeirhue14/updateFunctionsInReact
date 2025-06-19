import React,{useState, useEffect,useRef} from 'react';
import './App.css';

function App() {
  const [isRunning,setIsRunning] = useState(false);
  const [elapsedTime,setElapsedTime] = useState(0);
  const intId = useRef(null);
  const startTimeRef= useRef(0);
  useEffect(()=>{
    if(isRunning){
      intId.current = setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current);
      },10)
    }
    return ()=>{
      clearInterval(intId.current);
    }

  },[isRunning]);
  
  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); 
    return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)}:${padZeros(milliseconds, 2)}`;
  }
  function padZeros(number){
   return number < 10 ? "0"+number : number;
  }
  return (
    <div className="stopwatch">
      <span>{formatTime()}</span><br/>
      <button className="start-button" onClick={start}>Start</button>
      <button className="stop-button" onClick={stop}>Stop</button>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
