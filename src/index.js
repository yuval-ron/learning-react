import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {store} from './store'
import './index.css';
import App from './App';
import {getTodos, updateTodos} from './db.js'
import registerServiceWorker from './registerServiceWorker';

const AppWithProvider = (
  <Provider store={store}>
    <App getTodos={getTodos} updateTodos={updateTodos} />
  </Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));
registerServiceWorker();
