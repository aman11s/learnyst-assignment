import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoHandler,
  editTodoHandler,
  toggleTodoHandler,
} from "../../features/todoSlice";
import "./TodoCard.css";

export const TodoCard = ({ todoDetails }) => {
  const { id, isCompleted, todo } = todoDetails;

  const dispatch = useDispatch();

  const [isEditOn, setIsEditOn] = useState(false);
  const [updatedText, setUpdatedText] = useState("");

  const todoCheckHandler = (e) => {
    const todoCheckToggle = e.target.checked;
    dispatch(toggleTodoHandler({ todoCheckToggle, id }));
  };

  const editHandler = () => {
    setIsEditOn(true);
    setUpdatedText(todo);
  };

  const updateHandler = () => {
    dispatch(editTodoHandler({ id, updatedText }));
    setIsEditOn(false);
    setUpdatedText("");
  };

  return (
    <div className="todo-card">
      {isEditOn ? (
        <input
          onChange={(e) => setUpdatedText(e.target.value)}
          value={updatedText}
          type="text"
        />
      ) : (
        <label>
          <input
            onChange={todoCheckHandler}
            checked={isCompleted}
            type="checkbox"
          />
          <span className={`todo-label ${isCompleted && "todo-completed"}`}>
            {todo}
          </span>
        </label>
      )}
      {isEditOn ? (
        <>
          <button onClick={updateHandler}>Update Text</button>
          <button className="cancel-btn" onClick={() => setIsEditOn(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={editHandler}>Edit</button>
      )}

      <button onClick={() => dispatch(deleteTodoHandler({ id }))}>
        Delete
      </button>
    </div>
  );
};
