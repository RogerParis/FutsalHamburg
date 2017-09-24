import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiReducer from './api/apiReducer';
import referenceDataReducer from './referenceData/referenceDataReducer';


const reducers = combineReducers({
  api: apiReducer,
  referenceData: referenceDataReducer,
});

const middlewares = [thunk];
if (__DEV__) {
    middlewares.push(createLogger({ collapsed: true }));
}
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
