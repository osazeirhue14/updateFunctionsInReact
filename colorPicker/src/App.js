
import './App.css';
import {useState} from 'react';

function App() {
  const [color,setColor] = useState("#FFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Welcome to my Colour Picker Application!</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Colour: {color}</p>
        </div>
        <br></br>
        <br></br>
        <label>Select Color:</label>
        <br></br>
        <input type="color" value={color} onChange={handleColorChange}></input>
     
    </div>
  );
}

export default App;
