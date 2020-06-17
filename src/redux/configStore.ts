import { createStore, compose, applyMiddleware } from "redux";
import roofReducer from "./reducers/index";
import createSagaMiddleWare from "redux-saga";
import mySaga from './sagas'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleWare()
const configureStore = () => {
  const middleWares = [sagaMiddleWare];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(roofReducer, composeEnhancers(...enhancers));
  sagaMiddleWare.run(mySaga)
  return store;
};

export default configureStore;