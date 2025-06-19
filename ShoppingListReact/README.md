Usage
Enter a product name in the "Add Product" input field. The product should be one of the predefined items: Grapes, Banana, Apple, Pasta, Eggs, Mango, Cereal, Milk, Cabbage, Sweets, or Oatmeal.
Click the "Add Product to Cart" button to add the item to the shopping list.
Click on an item in the list to remove it from the shopping cart.
The total cost of the cart will be updated dynamically.
Code Explanation
The application is built using React with functional components and hooks (useState). Below is an overview of the main parts of the code:

State Management
foods: An array that holds the list of food items added to the cart.
food: A string that holds the current input value for the food item.
total: A number that holds the total cost of items in the cart.
Handlers
handleAddFood: Adds the new food item to the foods array and updates the total cost. It also clears the input field after adding the item.
handleRemoveFood: Removes a food item from the foods array and updates the total cost accordingly.
handleFoodChange: Updates the food state as the user types in the input field.
Rendering
The component renders:

A heading and instructions for the user.
A list of food items in the cart. Clicking on an item removes it from the list.
An input field and a button to add new items to the cart.
The total cost of items in the cart.
A menu displaying the prices of the available products.
Price Management
A foodPrices object maps the food item names to their respective prices. This is used to update the total cost when items are added or removed.
