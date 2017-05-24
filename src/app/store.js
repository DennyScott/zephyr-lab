import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import blog from '../data/blog';
import portfolio from '../data/portfolio';
import landingPage from '../data/landing-page';
import tag from '../data/tag.js';
import post from '../data/post';


const loggerMiddleware = createLogger();

const defaultState = {
  blog,
  tag,
  post,
  landingPage,
  portfolio
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
