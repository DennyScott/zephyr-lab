import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import blog from '../data/blog';

const defaultState = {
  blog
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
