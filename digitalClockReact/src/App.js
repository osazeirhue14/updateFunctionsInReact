//import logo from './mountain.jpg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [time,setTime]=useState((new Date()));
  useEffect(() => {
             const intId = setInterval(() =>{
             setTime((new Date()));
           },1000);
  
  return () =>{
    clearInterval(intId);
  }        
},[]);
function formatTime(){
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let meridian = hours <= 12 ? 'AM' : 'PM';

  hours = hours%12||12;

  return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)} ${meridian}`;

}
function padZeros(number){
  return number < 10 ? '0' + number : number;

}
  return (
    <div className="digital-clock">
      <span>{formatTime()}</span>

     
        
        
     
    </div>
  );
}

export default App;
