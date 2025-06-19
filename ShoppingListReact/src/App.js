
import './App.css';
import React,{useState} from 'react';

function App() {
  const [foods,setFoods] = useState([]);
  const [food,setFood] = useState("");
  const [total,setTotal] = useState(0);
  const foodPrices = {
    Grapes: 8,
    Banana: 3,
    Apple: 2,
    Pasta: 11,
    Eggs: 14,
    Mango: 4,
    Cereal: 7,
    Milk: 2,
    Cabbage: 3,
    Sweets: 7,
    Oatmeal: 8
  };

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    if (newFood && foodPrices[newFood] !== undefined) {
      setFoods(f => [...f, newFood]);
      setTotal(t => t + foodPrices[newFood]);
      setFood(""); // clear the input field
    }
  }
  function handleRemoveFood(index){
    const removedFood = foods[index];
    setFoods(f => foods.filter((_, i) => i !== index));
    if (foodPrices[removedFood] !== undefined) {
      setTotal(t => t - foodPrices[removedFood]);
    }
  }
  function handleFoodChange(event){
    setFood(event.target.value);
  }
  return (
    <div className="shoppingList">
      <h3>Welcome to our Shop!</h3>
      <p>To add to your cart below, enter the product into the search bar and press the button to add it to the cart.</p>
      <ul className="list">
        {foods.map((food,index) => 
        <li key={index} onClick={() => handleRemoveFood(index)}> 
          {food}
        </li>)}
        
      </ul>
      <label>Add to Shopping List:</label><br/>
      <input placeholder="Add Product" type="text" value={food} onChange={handleFoodChange} id="foodInput"/><br/>
      <button onClick={handleAddFood}>Add Product to Cart</button><br/><br/>

      <h4>The total of your cart is ${total}</h4>

      <p>Here's a menu and the prices of our prodcuts</p>
      <ul>
        {Object.entries(foodPrices).map(([item, price]) => (
          <li key={item}>{item} - ${price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
