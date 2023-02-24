import React from "react";
import { useState } from "react";

export const ToDoListForm = ({ toDoList }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(
      [...toDoList].concat({
        id: toDoList.length + 1,
        task: userInput,
        complete: false,
      })
    );
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Enter task"></label>
      <input
        style={{ maring: "50" }}
        type="text"
        value={userInput}
        placeholder="Enter task..."
        onChange={handleChange}
      />
    </form>
  );
};
