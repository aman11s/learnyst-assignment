import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { AddTodo, TodoCard } from "./components";

function App() {
  const { todos } = useSelector((store) => store.todos);

  return (
    <div className="App">
      <h1 className="title">
        Todo List{" "}
        <span role="img" aria-label="writing-hand">
          ✍️
        </span>
      </h1>
      <AddTodo />
      {todos.map((todoDetails) => {
        return <TodoCard key={todoDetails.id} todoDetails={todoDetails} />;
      })}
    </div>
  );
}

export default App;
