import React from "react";
import { useState } from "react";


export const ToDoListForm = ({ toDoList }) => {

const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(
      [...toDoList].push({
        id: toDoList.length + 1,
        task: todo,
        complete: false,
      })
    );
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Enter task"></label>
      <input
        style={{ maring: "50" }}
        type="text"
        value={todo}
        placeholder="Enter task..."
        onChange={handleChange}
      />
    </form>
  );
};
