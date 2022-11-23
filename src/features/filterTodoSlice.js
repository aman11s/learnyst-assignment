import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilter: "All",
};

const filterTodoSlice = createSlice({
  name: "filterTodo",
  initialState,
  reducers: {
    updateSelectedFilter: (state, action) => {
      const { filter } = action.payload;
      state.selectedFilter = filter;
    },
  },
});

export default filterTodoSlice.reducer;
export const { updateSelectedFilter } = filterTodoSlice.actions;
