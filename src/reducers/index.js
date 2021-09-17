import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tasksReducer from "./tasksReducer";
import completedTasksReduer from "./completeTasksReducer";
import monthDayReducer from "./monthDaysReducer";

export default combineReducers({
  tasks: tasksReducer,
  completedTasks: completedTasksReduer,
  days: monthDayReducer,
  form: formReducer,
});
