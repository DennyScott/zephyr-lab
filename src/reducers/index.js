import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import landingPage from './landing-page';
import blog from './blog';
import post from './post';

const rootReducer = combineReducers({landingPage, blog, post, routing: routerReducer});

export default rootReducer;
