import { TaskReducersActions, TaskInterface } from "../types/appTypes";

export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_RESPONSE = "FETCH_TASKS_RESPONSE";
export const FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR";


export const fetchTasksRequest = (): TaskReducersActions => {
  return {
    type: FETCH_TASKS_REQUEST,
    payload: {
      isProgress: true,
      tasks: []
    }
  }
}

export const fetchTasksResponse = (tasks: TaskInterface[]): TaskReducersActions => {
  return {
    type: FETCH_TASKS_REQUEST,
    payload: {
      isProgress: false,
      tasks: tasks
    }
  }
}

export const fetchTasksError = (): TaskReducersActions => {
  return {
    type: FETCH_TASKS_REQUEST,
    payload: {
      isProgress: false,
      tasks: []
    }
  }
}



export const EDIT_TASK_REQUEST = "EDIT_TASK_REQUEST";
export const EDIT_TASK_RESPONSE = "EDIT_TASK_RESPONSE";
export const EDIT_TASK_ERROR = "EDIT_TASK_ERROR";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_RESPONSE = "ADD_TASK_RESPONSE";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_RESPONSE = "DELETE_TASK_RESPONSE";
export const DELETE_TASK_ERROR = "DELETE_TASK_ERROR";
