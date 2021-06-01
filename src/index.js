import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGa from 'react-ga';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

const history = createBrowserHistory();

function initializeReactGA() {
  ReactGa.initialize('UA-161386717-2');
  ReactGa.pageview('/homepage');
}

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
