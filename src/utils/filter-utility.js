export const filterTodosBySelect = (selectedFilter, todos) => {
  switch (selectedFilter) {
    case "Active":
      return todos.filter(({ isCompleted }) => !isCompleted);

    case "Completed":
      return todos.filter(({ isCompleted }) => isCompleted);

    default:
      return todos;
  }
};
