const days = [
  { day: "", task: "" },
  { day: "", task: "" },
  { day: "", task: "" },
  { day: "", task: "" },
  { day: "", task: "" },
  { day: 1, task: "" },
  { day: 2, task: "" },
  { day: 3, task: "" },
  { day: 4, task: "" },
  { day: 5, task: "" },
  { day: 6, task: "" },
  { day: 7, task: "" },
  { day: 8, task: "" },
  { day: 9, task: "" },
  { day: 10, task: "" },
  { day: 11, task: "" },
  { day: 12, task: "" },
  { day: 13, task: "" },
  { day: 14, task: "" },
  { day: 15, task: "" },
  { day: 16, task: "" },
  { day: 17, task: "" },
  { day: 18, task: "" },
  { day: 19, task: "" },
  { day: 20, task: "" },
  { day: 21, task: "" },
  { day: 22, task: "" },
  { day: 23, task: "" },
  { day: 24, task: "" },
  { day: 25, task: "" },
  { day: 26, task: "" },
  { day: 27, task: "" },
  { day: 28, task: "" },
  { day: 29, task: "" },
  { day: 30, task: "" },
];

const monthDayReducer = (state = days, action) => {
  switch (action.type) {
    case "GET_DAYS":
      return state;
    case "ADD_TASK":
      const dayNumber = action.payload.date.split("-");
      const number = parseInt(dayNumber[2], 10);

      return state.map((item) =>
        item.day === number ? { ...item, task: action.payload.title } : item
      );
    default:
      return state;
  }
};
export default monthDayReducer;
