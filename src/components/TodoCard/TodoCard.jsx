import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoHandler } from "../../features/todoSlice";
import "./TodoCard.css";

export const TodoCard = ({ todoDetails }) => {
  const { id, isCompleted, todo } = todoDetails;

  const dispatch = useDispatch();

  const todoCheckHandler = (e) => {
    const todoCheckToggle = e.target.checked;
    dispatch(toggleTodoHandler({ todoCheckToggle, id }));
  };

  return (
    <div className="todo-card">
      <label>
        <input
          onChange={todoCheckHandler}
          checked={isCompleted}
          type="checkbox"
        />
        <span className="todo-label">{todo}</span>
      </label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
