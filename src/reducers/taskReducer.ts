import { TaskReducerStateInterface, TaskReducersActions } from "../types/appTypes";
import * as actionTypes from "./actions";

const initState: TaskReducerStateInterface = { tasks: [], isProgress: false };

export const taskReducer = (state: TaskReducerStateInterface = initState, action: TaskReducersActions): TaskReducerStateInterface => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_REQUEST:
      return {
        tasks: [...state.tasks],
        isProgress: true
      };
    case actionTypes.FETCH_TASKS_RESPONSE:
      return {
        tasks: action.payload.tasks,
        isProgress: false
      };
    case actionTypes.FETCH_TASKS_ERROR:
      return {
        tasks: [],
        isProgress: false
      };
    default:
      return state;
  }
};