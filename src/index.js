import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchBlog, fetchTags } from './actions/blog.js';
import App from './app/App';

import './index.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/linea-arrows.css';
import './assets/css/linea-icons.css';
import './assets/css/template.css';

import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
