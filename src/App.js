import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { ToDoListForm } from "./components/ToDoListForm";

function App() {
  const [toDoList, setToDolist] = useState([]);



  const handleDelete = (id) => {
    let deleted = toDoList.filter((task) => task.id !== id
  
    );

    setToDolist(deleted);
  };

  const handleSubmit = (userInput) => {
    const lastTodo = {
      id: toDoList.length + 1,
      task: userInput,
      // every task with id number multiple of three would be completed.
      complete:  (toDoList.length + 1) % 3 === 0 
    };
  
    setToDolist([
      ...toDoList, lastTodo
    ]);
  };
  

  return (
    <div className="App">
      <Header />
<ToDoListForm toDoList={toDoList} setToDolist={setToDolist} handleSubmit={handleSubmit} />

      <ToDoList
        toDoList={toDoList}
        handleDelete={handleDelete}
       />
      
      

    </div>
  );
}

export default App;
