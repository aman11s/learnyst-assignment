import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoHandler } from "../../features/todoSlice";
import "./AddTodo.css";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoHandler({ userInput }));
    setUserInput("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          required
          type="text"
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
};
