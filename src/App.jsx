import "./App.css";
import { AddTodo } from "./components";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        Todo List{" "}
        <span role="img" aria-label="writing-hand">
          ✍️
        </span>
      </h1>
      <AddTodo />
    </div>
  );
}

export default App;
