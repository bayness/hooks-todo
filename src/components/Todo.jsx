import React from "react";


export const Todo = ({todo}) =>{
  return (
    <div className={todo.complete ? "strike" :""} >
      {todo.task} 
    </div>
  )
}