import { useState } from 'react';
import data from './components/data.json'
import { Header } from './components/Header';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { ToDoListForm } from './components/ToDoListForm';

function App() {

  const [toDoList,setToDolist] = useState(data);
  const [userInput, setUserInput] = useState("");

  

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete : !task.complete} : {...task};
    });
    setToDolist(mapped);
  }

  const handleDelete = () => {

    let deleted = toDoList.filter( task => {return !task.complete;});

setToDolist(deleted);
  }

  // these functions concerns the form component only 

   
  const handleChange = (e) => {
       setUserInput(e.currentTarget.value);
  }

  const addTask = () => {
     
    let copy = [...toDoList];

    copy = [...toDoList, {id : toDoList.length + 1, task : userInput, complete  : false }
      ];

      setUserInput(copy);

  }

  const handleSubmit = (e) =>{ 
    e.preventDefault();
    addTask(userInput);
    setUserInput("");

  }

  return (
    <div className="App">

      <Header />
      <ToDoList  toDoList={toDoList}  handleToggle={handleToggle} handleDelete={handleDelete} />

      <ToDoListForm  onChange={handleChange} onSubmit={handleSubmit} />

     
    
       

    </div>
  );
}

export default App;
