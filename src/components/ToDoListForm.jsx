import React from "react";
import { useState } from "react";

export const ToDoListForm = () => {

  const [userInput, setUseInput] = useState("");
  

  <form>
    <label htmlFor="task"> add a task</label>
    <input  type="text"  value={userInput} placeholder="Enter task..." />
  </form>
}