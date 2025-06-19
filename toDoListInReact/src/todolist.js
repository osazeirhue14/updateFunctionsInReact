import React, { useState } from "react";
import './Todolist.css';

function Todolist() {
    const [tasks, setTasks] = useState(["Make Bed", "Eat Breakfast", "Walk Dog"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
       
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }




    }
    
    return (
        <div className="dolist">
            <div>
                <h2>To-Do List</h2><br />
                <input
                    type="text"
                    placeholder="Add New Task...."
                    value={newTask}
                    onChange={handleInputChange}
                   
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button 
                        className="delete-button"
                        onClick={()=> deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                        className="up-button"
                        onClick={()=> moveTaskUp(index)}>
                            Up
                        </button>
                        <button 
                        className="down-button"
                        onClick={()=> moveTaskDown(index)}>
                            Down
                        </button>
                        
                        
                    </li>
                )}
            </ol>
        </div>
    );
}


export default Todolist;
