import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getTodos, updateTodos} from './db.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App getTodos={getTodos} updateTodos={updateTodos} />,
    document.getElementById('root')
);
registerServiceWorker();
