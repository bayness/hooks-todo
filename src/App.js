import { useState } from "react";
import data from "./components/data.json";
import { Header } from "./components/Header";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { ToDoListForm } from "./components/ToDoListForm";

function App() {
  const [toDoList, setToDolist] = useState(data);
  // const [userInput, setUserInput] = useState("");

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDolist(mapped);
  };

  const handleDelete = () => {
    let deleted = toDoList.filter((task) => {
      return !task.complete;
    });

    setToDolist(deleted);
  };

  // these functions concerns the form component only

  // const Delete = (id) => {
  //   let newArray = toDoList.filter((todo) => todo.id != id);
  //   setToDolist(newArray);
  // };

  

  

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      >
      
      

      </ToDoList>
      <ToDoListForm />

    </div>
  );
}

export default App;
