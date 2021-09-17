const completedTasksReduer = (state = [], action) => {
  switch (action.type) {
    case "COMPLETE_TASK":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default completedTasksReduer;
