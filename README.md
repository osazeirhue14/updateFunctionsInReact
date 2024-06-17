Phone List Application
This application allows users to manage a list of different types of phones, including their make, year, and manufacturer. The app is built using React and demonstrates the use of state hooks and event handling.

Features
Add a phone to the list with details like type, year, and manufacturer.
Remove a phone from the list by clicking on it.
Code Explanation
The main logic of the application is contained in the App component, which manages the state and handles the user interactions.

State Variables
phone: An array that holds the list of phones.
phoneType: A string that holds the current input value for the phone type.
phoneYear: A number that holds the current input value for the phone year.
phoneManufacturer: A string that holds the current input value for the phone manufacturer.
Event Handlers
handleAddPhone(): Adds a new phone to the list and resets the input fields.
handleRemovePhone(index): Removes a phone from the list based on its index.
handlePhoneTypeChange(event): Updates the phoneType state with the input value.
handlePhoneYearChange(event): Updates the phoneYear state with the input value.
handlePhoneManufacturerChange(event): Updates the phoneManufacturer state with the input value.
Rendering
The component renders a list of phones, displaying the type, year, and manufacturer for each phone.
Input fields are provided for entering the phone details, with a button to add the phone to the list.
Clicking on a phone in the list removes it.
How to Use
Enter the phone type in the "Phone Type" input field.
Enter the year of the phone in the "Phone Year" input field.
Enter the manufacturer of the phone in the "Phone Manufacturer" input field.
Click the "Add Phone" button to add the phone to the list.
The list of phones will be displayed below the input fields. Click on any phone in the list to remove it.

