import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import landingPage from './landing-page';
import blog from './blog';
import post from './post';
import tag from './tag';
import portfolio from './portfolio';

const rootReducer = combineReducers({landingPage, blog, post, tag, portfolio, routing: routerReducer});

export default rootReducer;
