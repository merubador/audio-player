import { applyMiddleware, createStore } from "redux";
import sagaMiddlewareFactory from "redux-saga";
import reducer from "./reducers";
import saga from "./saga";

const configureStore = () => {
  const sagaMiddleware = sagaMiddlewareFactory();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(saga);
  return store;
};

export default configureStore;
