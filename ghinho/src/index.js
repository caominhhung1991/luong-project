import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/font-awesome/css/font-awesome.css';

import './../node_modules/jquery/dist/jquery';
import './../node_modules/popper.js/dist/umd/popper';
import './../node_modules/bootstrap/dist/js/bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
