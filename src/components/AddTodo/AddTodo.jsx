import React, { useState } from "react";
import "./AddTodo.css";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <form>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          required
          type="text"
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};
