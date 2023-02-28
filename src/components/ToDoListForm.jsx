import React from "react";
import { useState } from "react";

export const ToDoListForm = ({handleSubmit}) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
   
    handleSubmit(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="Enter task"></label>
      <input
        style={{ margin: "50px" }}
        type="text"
        value={userInput}
        placeholder="Enter task..."
        onChange={handleChange}
      />
      <button type="submit" >Submit</button>
    </form>
  );
};
