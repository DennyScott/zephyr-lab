import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import landingPage from './landing-page';

const rootReducer = combineReducers({landingPage, routing: routerReducer});

export default rootReducer;
