import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import blog from '../data/blog';
import landingPage from '../data/landing-page';


const loggerMiddleware = createLogger();

const defaultState = {
  blog,
  landingPage
};

const enhancers = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers);

export default store;
