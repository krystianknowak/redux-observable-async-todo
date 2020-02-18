import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { taskReducer } from './reducers/taskReducer';
import { rootEpic } from './epics/tasksEpics';
// import { tasksEpic } from './epics/tasksEpics';
// import pingReducer from './reducers/pingpong';
// import { pingEpic } from './epics';


const rootReducer = combineReducers({
  tasks: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);