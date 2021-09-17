const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "COMPLETE_TASK":
      return [...state].filter((task) => task.title !== action.payload.title);
    default:
      return state;
  }
};
export default tasksReducer;
