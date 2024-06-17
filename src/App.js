import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [phone,setPhone] = useState([]);
  const [phoneType,setPhoneType] = useState("");
  const [phoneYear, setPhoneYear] = useState(2024);
  const [phoneManufacturer,setPhoneManufacturer] = useState("");
  function handleAddPhone(){

    
    const newPhone = {type:phoneType,year:phoneYear, manufacturerName:phoneManufacturer};
    setPhone(p=>[...p,newPhone]);

    setPhoneType("");
    setPhoneYear(2024);
    setPhoneManufacturer("");

  }
  function handleRemovePhone(index){
    setPhone(p=>phone.filter((_,i)=>i !== index));

  }
  function handlephoneTypeChange(event){
setPhoneType(event.target.value);
  }
  function handlephoneYearChange(event){
    setPhoneYear(event.target.value);
    
  }
  function handlephoneManufacturerChange(event){
    setPhoneManufacturer(event.target.value);
  }
  return (
    <div>
      <h2> Here's a list of different types of Phones and their make,year and manufacturer.</h2>
      <ul>
        {phone.map((phone,index)=>
        <li key={index} onClick ={() => handleRemovePhone(index)}>
          {phone.type},{phone.year},"Made by " {phone.manufacturerName}
          </li>)}
        
        
      </ul>
      <label id="phoneType">Phone Type:</label><br/>
      <input type="text" value={phoneType} onChange={handlephoneTypeChange} placeholder="Phone Type"/><br/>
      <label id="phoneType">Phone Year:</label><br/>
      <input type="number" value={phoneYear} onChange={handlephoneYearChange} placeholder="Phone Year of make"/><br/>
      <label id="phoneType">Phone Manufacturer:</label><br/>
      <input type="text" value={phoneManufacturer} onChange={handlephoneManufacturerChange} placeholder="Manufacturing Company"/><br/><br/>
      <button onClick={handleAddPhone}>Add Phone</button>
    </div>
  );
}

export default App;
