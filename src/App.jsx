import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AddTodo, TodoCard } from "./components";
import { updateSelectedFilter } from "./features/filterTodoSlice";
import { filterTodosBySelect } from "./utils/filter-utility";

function App() {
  const { todos } = useSelector((store) => store.todos);

  const { selectedFilter } = useSelector((store) => store.filterTodos);
  const dispatch = useDispatch();

  const filterOptions = ["All", "Active", "Completed"];

  const filterSelectHandler = (e) => {
    const filter = e.target.value;
    dispatch(updateSelectedFilter({ filter }));
  };

  const filteredTodos = filterTodosBySelect(selectedFilter, todos);

  return (
    <div className="App">
      <h1 className="title">
        Todo List{" "}
        <span role="img" aria-label="writing-hand">
          ✍️
        </span>
      </h1>

      <AddTodo />

      <div className="filter-todos">
        <span>Filter Todos : </span>
        <select
          className="filter-select"
          onChange={filterSelectHandler}
          name="filter"
        >
          {filterOptions.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="todo-list">
        {filteredTodos.map((todoDetails) => {
          return <TodoCard key={todoDetails.id} todoDetails={todoDetails} />;
        })}
      </div>
    </div>
  );
}

export default App;
