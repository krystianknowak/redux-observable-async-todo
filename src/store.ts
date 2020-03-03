import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { taskReducer } from './reducers/taskReducer';
import { rootEpic } from './epics/tasksEpics';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const rootReducer = combineReducers({
  tasks: taskReducer
});


export type RootState = ReturnType<typeof rootReducer>;
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function configureStore(initialState?: RootState) {

  const middlewares = [
    epicMiddleware,
  ];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  epicMiddleware.run(rootEpic);

  return store;
}

const store = configureStore();

export { store };