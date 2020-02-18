export interface TaskInterface {
  id: number,
  description: string,
  done: boolean;
}

export interface TaskReducerStateInterface {
  tasks: TaskInterface[];
  isProgress: boolean;
}

export interface CreateAction<T> {
  type: string;
  payload: T;
}

export type TaskReducersActions = CreateAction<TaskReducerStateInterface>;