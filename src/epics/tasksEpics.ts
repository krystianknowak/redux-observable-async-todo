import * as ActionTypes from "../reducers/actions";
// import { RootState } from "../store";
import { Observable, from } from "rxjs";
import { AnyAction } from "redux";
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/internal/operators";
import { combineEpics, Epic } from "redux-observable";
import { fetchTasks } from "../services/taskService";

// specific action type
const tasksEpic: Epic = (action$: Observable<AnyAction>) => {
  return action$.pipe(
    ofType(ActionTypes.FETCH_TASKS_REQUEST),
    switchMap((action) => fetchTasks()),
    map((res) => console.log(res))
  )
}

// const tasksEpic: Epic = (action$, store) =>
//   action$.pipe(
//     ofType(ActionTypes.FETCH_TASKS_REQUEST),
//     switchMap(() => {
//       return Observable.fromPromise(promiseCreator())
//       .map()
//     })
//   );

const promiseCreator = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello epic world!!!");
    }, 3000);
  });
}

export const rootEpic = combineEpics(
  tasksEpic,
);