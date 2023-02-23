import React from "react";
import { Todo } from "./Todo";


export const ToDoList = ({toDoList, handleToggle, handleDelete}) => {

  return (
    <div>
      {toDoList.map( todo =>  { return (<Todo todo={todo}  handleToggle={handleToggle}  handleDelete={handleDelete} /> )})}

      <button onClick={handleDelete} style={{margin : "20"}} >Delete Compeleted</button>
    </div>
  )

}