import React from "react";
import { Todo } from "./Todo";




export const ToDoList = ({ toDoList, kharya }) => {



  return (
    <div>
      {toDoList.map((todo) => {
        return (
      <div>
         <Todo
            todo={todo}
          />

          <button onClick={() => kharya(todo.id)} style={{ Color: "red" , margin : "20px"}}>
          CUT
        </button>
        </div>
        );
      })}

  
    </div>
  );
};
