import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import landingPage from './landing-page';
import blog from './blog';
import post from './post';
import tag from './tag';

const rootReducer = combineReducers({landingPage, blog, post, tag, routing: routerReducer});

export default rootReducer;
