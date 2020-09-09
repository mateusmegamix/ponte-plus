
// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import reducers from "./ducks";
// import sagas from './sagas';

// const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const middleware = [
//     sagaMiddleware,
// ];

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

// const store = createAppropriateStore(reducers,  compose(
//   applyMiddleware(...middleware),
// ));

// sagaMiddleware.run(sagas);

// export default store;
import { createStore, applyMiddleware } from "redux";
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware
} from "redux-offline-queue";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;