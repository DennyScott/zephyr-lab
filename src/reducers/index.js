import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import landingPage from './landing-page';
import blog from './blog';

const rootReducer = combineReducers({landingPage, blog, routing: routerReducer});

export default rootReducer;
