import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import RootReducer from '../reducers';
const preloadedState = {
  entities: {},
};
export default createStore(
  RootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);
