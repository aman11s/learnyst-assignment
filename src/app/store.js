import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import filterTodoReducer from "../features/filterTodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filterTodos: filterTodoReducer,
  },
});
