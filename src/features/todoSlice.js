import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoHandler: (state, action) => {
      const { userInput } = action.payload;
      const todo = { id: uuid(), todo: userInput, isCompleted: false };
      state.todos.push(todo);
      updateLocalStorage(state.todos);
    },

    toggleTodoHandler: (state, action) => {
      const { id, todoCheckToggle } = action.payload;
      const foundTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos[foundTodoIndex].isCompleted = todoCheckToggle;
      updateLocalStorage(state.todos);
    },

    deleteTodoHandler: (state, action) => {
      const { id } = action.payload;
      const foundTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(foundTodoIndex, 1);
      updateLocalStorage(state.todos);
    },

    editTodoHandler: (state, action) => {
      const { id, updatedText } = action.payload;
      const foundTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos[foundTodoIndex].todo = updatedText;
      updateLocalStorage(state.todos);
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodoHandler,
  toggleTodoHandler,
  deleteTodoHandler,
  editTodoHandler,
} = todoSlice.actions;
